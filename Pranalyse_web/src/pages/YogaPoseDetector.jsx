import React from 'react'
import { useEffect, useRef, useState } from "react";


function YogaPoseDetector() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPose, setCurrentPose] = useState('No pose detected');
  const [poseAccuracy, setPoseAccuracy] = useState(0);
  const [mode, setMode] = useState('yoga'); // 'yoga' or 'physio'
  const [reps, setReps] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [feedback, setFeedback] = useState('');
const [isHoldingPose, setIsHoldingPose] = useState(false);
const [holdStartTime, setHoldStartTime] = useState(null);
  const [show3DPose, setShow3DPose] = useState(false); // New state for 3D pose toggle

  // Helper function to calculate angle between three points
  const calculateAngle = (a, b, c) => {
    const ab = { x: b.x - a.x, y: b.y - a.y };
    const cb = { x: b.x - c.x, y: b.y - c.y };
    
    const dot = (ab.x * cb.x + ab.y * cb.y);
    const cross = (ab.x * cb.y - ab.y * cb.x);
    
    const angle = Math.atan2(cross, dot);
    return Math.abs(angle * 180 / Math.PI);
  };

  // Helper function to calculate distance between two points
  const calculateDistance = (a, b) => {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  };

  const HOLD_TIME_REQUIRED = 2000; // 2 seconds
const REP_ACCURACY_THRESHOLD = 85; // % required to count


  // Function to get 3D pose image based on current pose
  const get3DPoseImage = () => {
    const poseImages = {
      // Yoga poses with relevant images
      'Mountain Pose': '/assests/images/PosePreview.png',
      'Tree Pose': '/assests/images/PosePreview.png',
      'Warrior II': '/assests/images/PosePreview.png',
      'Downward Dog': '/assests/images/PosePreview.png',
      'Triangle Pose': '/assests/images/PosePreview.png',
      
      // Physio exercises (in case mode switching is enabled later)
      'Shoulder Abduction': '/assests/images/PosePreview.png',
      'Shoulder Flexion': '/assests/images/PosePreview.png',
      'Hip Abduction': '/assests/images/PosePreview.png',
      'Knee Flexion': '/assests/images/PosePreview.png',
      'Squat': '/assests/images/PosePreview.png',
      'Arm Raise': '/assests/images/PosePreview.png',
    };

    // Default image if pose not found
    const defaultImage = '/assests/images/PosePreview.png';
    
    return poseImages[currentPose] || defaultImage;
  };

  // Main detection logic
  const detectPose = (landmarks) => {
    if (!landmarks || landmarks.length < 29) return { pose: 'No pose detected', accuracy: 0 };

    // if (mode === 'yoga') {
    return detectYogaPose(landmarks);
    // } else {
    //   return detectPhysioExercise(landmarks);
    // }
  };

  // Yoga pose detection logic
  const detectYogaPose = (landmarks) => {
    // Get key landmarks
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftElbow = landmarks[13];
    const rightElbow = landmarks[14];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];

    // Check for different yoga poses
    const poses = [
      checkSeatedForwardBend(landmarks),
      checkTreePose(landmarks),
      checkWarriorII(landmarks),
      checkDownwardDog(landmarks),
      checkTrianglePose(landmarks)
    ];

    // Return the pose with highest accuracy
    const bestPose = poses.reduce((best, current) => 
      current.accuracy > best.accuracy ? current : best
    );

    return bestPose.accuracy > 0.3 ? bestPose : { pose: 'No pose detected', accuracy: 0 };
  };

  // Physiotherapy exercises detection
  const detectPhysioExercise = (landmarks) => {
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftElbow = landmarks[13];
    const rightElbow = landmarks[14];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];

    // Check for different physio exercises
    const exercises = [
      checkShoulderAbduction(landmarks),
      checkShoulderFlexion(landmarks),
      checkHipAbduction(landmarks),
      checkKneeFlexion(landmarks),
      checkSquat(landmarks),
      checkArmRaise(landmarks)
    ];

    // Return the exercise with highest accuracy
    const bestExercise = exercises.reduce((best, current) => 
      current.accuracy > best.accuracy ? current : best
    );

    return bestExercise.accuracy > 0.3 ? bestExercise : { pose: 'No exercise detected', accuracy: 0 };
  };

  // Yoga Pose Detections
// New: Seated Forward Bend (Paschimottanasana)
const checkSeatedForwardBend = (landmarks) => {
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];
  const leftKnee = landmarks[25];
  const rightKnee = landmarks[26];
  const leftAnkle = landmarks[27];
  const rightAnkle = landmarks[28];
  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftWrist = landmarks[15];
  const rightWrist = landmarks[16];

  // Legs straightness
  const leftLegAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
  const rightLegAngle = calculateAngle(rightHip, rightKnee, rightAnkle);
  const leftLegStraight = leftLegAngle > 150 ? 1 : leftLegAngle / 150;
  const rightLegStraight = rightLegAngle > 150 ? 1 : rightLegAngle / 150;
  const legStraightScore = (leftLegStraight + rightLegStraight) / 2;

  // Torso bent forward → shoulders lower than hips
  const torsoForward = ((leftShoulder.y + rightShoulder.y) / 2) > ((leftHip.y + rightHip.y) / 2) ? 1 : 0;

  // Hands reaching toward feet
  const leftHandToAnkle = calculateDistance(leftWrist, leftAnkle);
  const rightHandToAnkle = calculateDistance(rightWrist, rightAnkle);
  const handsForward = Math.max(0, 1 - (leftHandToAnkle + rightHandToAnkle) / 0.6);

  const accuracy = (legStraightScore + torsoForward + handsForward) / 3;

  return { pose: 'Seated Forward Bend', accuracy };
};


  const checkTreePose = (landmarks) => {
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];

    const leftFootToRightKnee = calculateDistance(leftAnkle, rightKnee);
    const rightFootToLeftKnee = calculateDistance(rightAnkle, leftKnee);
    
    const footPosition = Math.min(1, Math.max(
      1 - leftFootToRightKnee * 3,
      1 - rightFootToLeftKnee * 3
    ));

    const hipAlignment = 1 - Math.abs(leftHip.y - rightHip.y) * 2;
    const handsTogether = 1 - calculateDistance(leftWrist, rightWrist) * 2;

    const accuracy = (footPosition + hipAlignment + handsTogether) / 3;
    
    return { pose: 'Tree Pose', accuracy };
  };

  const checkWarriorII = (landmarks) => {
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];
  const leftKnee = landmarks[25];
  const rightKnee = landmarks[26];
  const leftAnkle = landmarks[27];
  const rightAnkle = landmarks[28];
  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftWrist = landmarks[15];
  const rightWrist = landmarks[16];

  // --- Knee Angles ---
  const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
  const rightKneeAngle = calculateAngle(rightHip, rightKnee, rightAnkle);

  // One leg bent ~90°, other straight ~180°
  const leftFront =
    leftKneeAngle < 110 && leftKneeAngle > 70 && rightKneeAngle > 150;

  const rightFront =
    rightKneeAngle < 110 && rightKneeAngle > 70 && leftKneeAngle > 150;

  const kneeScore = leftFront || rightFront ? 1 : 0;

  // --- Arms Horizontal ---
  const leftArmAngle = calculateAngle(
    leftWrist,
    leftShoulder,
    rightShoulder
  );

  const rightArmAngle = calculateAngle(
    rightWrist,
    rightShoulder,
    leftShoulder
  );

  const armsHorizontal =
    Math.abs(leftArmAngle - 180) < 25 &&
    Math.abs(rightArmAngle - 180) < 25
      ? 1
      : 0;

  // --- Shoulder Level Check ---
  const shoulderLevel =
    Math.abs(leftShoulder.y - rightShoulder.y) < 0.05 ? 1 : 0;

  // --- Final Accuracy ---
  const accuracy =
    (kneeScore * 0.5 + armsHorizontal * 0.3 + shoulderLevel * 0.2);

  return {
    pose: "Warrior II",
    accuracy,
    detected: accuracy > 0.6
  };
};

  const checkDownwardDog = (landmarks) => {
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];
    const leftElbow = landmarks[13];
    const rightElbow = landmarks[14];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];

    const hipHeight = (leftHip.y + rightHip.y) / 2;
    const shoulderHeight = (leftShoulder.y + rightShoulder.y) / 2;
    const invertedV = hipHeight < shoulderHeight ? 1 : 0;

    const leftLegAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
    const rightLegAngle = calculateAngle(rightHip, rightKnee, rightAnkle);
    const straightLegs = (Math.min(1, leftLegAngle / 160) + Math.min(1, rightLegAngle / 160)) / 2;

    const leftArmAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
    const rightArmAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);
    const straightArms = (Math.min(1, leftArmAngle / 160) + Math.min(1, rightArmAngle / 160)) / 2;

    const accuracy = (invertedV + straightLegs + straightArms) / 3;
    
    return { pose: 'Downward Dog', accuracy };
  };

  const checkTrianglePose = (landmarks) => {
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];

    const stanceWidth = calculateDistance(leftAnkle, rightAnkle);
    const wideStance = Math.min(1, stanceWidth * 1.5);

    const leftArmToLeg = calculateDistance(leftWrist, leftAnkle);
    const rightArmToLeg = calculateDistance(rightWrist, rightAnkle);
    const armReach = Math.max(
      1 - leftArmToLeg * 2,
      1 - rightArmToLeg * 2
    );

    const shoulderTilt = Math.abs(leftShoulder.y - rightShoulder.y);
    const bodyTilt = Math.min(1, shoulderTilt * 2);

    const accuracy = (wideStance + armReach + bodyTilt) / 3;
    
    return { pose: 'Triangle Pose', accuracy };
  };

  // Physiotherapy Exercise Detections
  const checkShoulderAbduction = (landmarks) => {
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftElbow = landmarks[13];
    const rightElbow = landmarks[14];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];

    // Check if arms are raised sideways (abduction)
    const leftArmAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
    const rightArmAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);
    
    const leftArmHeight = 1 - Math.abs(leftWrist.y - leftShoulder.y);
    const rightArmHeight = 1 - Math.abs(rightWrist.y - rightShoulder.y);
    
    const armsRaised = (leftArmHeight + rightArmHeight) / 2;

    const accuracy = armsRaised;
    
    return { pose: 'Shoulder Abduction', accuracy };
  };

  const checkShoulderFlexion = (landmarks) => {
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftElbow = landmarks[13];
    const rightElbow = landmarks[14];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];

    // Check if arms are raised forward (flexion)
    const leftArmForward = leftWrist.y < leftShoulder.y ? 1 : 0;
    const rightArmForward = rightWrist.y < rightShoulder.y ? 1 : 0;
    
    const armsForward = (leftArmForward + rightArmForward) / 2;

    const accuracy = armsForward;
    
    return { pose: 'Shoulder Flexion', accuracy };
  };

  const checkHipAbduction = (landmarks) => {
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];

    // Check if legs are moved sideways (hip abduction)
    const leftLegSpread = Math.abs(leftAnkle.x - leftHip.x);
    const rightLegSpread = Math.abs(rightAnkle.x - rightHip.x);
    
    const legSpread = Math.min(1, (leftLegSpread + rightLegSpread) * 2);

    const accuracy = legSpread;
    
    return { pose: 'Hip Abduction', accuracy };
  };

  const checkKneeFlexion = (landmarks) => {
    const leftHip = landmarks[23];
    const rightHip = landmarks[24];
    const leftKnee = landmarks[25];
    const rightKnee = landmarks[26];
    const leftAnkle = landmarks[27];
    const rightAnkle = landmarks[28];

    // Check knee bending (flexion)
    const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
    const rightKneeAngle = calculateAngle(rightHip, rightKnee, rightAnkle);
    
    const kneeBend = Math.max(
      1 - Math.abs(90 - leftKneeAngle) / 90,
      1 - Math.abs(90 - rightKneeAngle) / 90
    );

    const accuracy = kneeBend;
    
    return { pose: 'Knee Flexion', accuracy };
  };

  const checkSquat = (landmarks) => {
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];
  const leftKnee = landmarks[25];
  const rightKnee = landmarks[26];
  const leftAnkle = landmarks[27];
  const rightAnkle = landmarks[28];

  const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
  const rightKneeAngle = calculateAngle(rightHip, rightKnee, rightAnkle);

  // --- Knee Bend Score ---
  const normalize = (angle, ideal, tolerance) =>
    Math.max(0, 1 - Math.abs(angle - ideal) / tolerance);

  const leftKneeScore = normalize(leftKneeAngle, 90, 50);
  const rightKneeScore = normalize(rightKneeAngle, 90, 50);

  const kneeScore = (leftKneeScore + rightKneeScore) / 2;

  // --- Hip Below Knee Check ---
  const hipY = (leftHip.y + rightHip.y) / 2;
  const kneeY = (leftKnee.y + rightKnee.y) / 2;

  const depthScore = hipY > kneeY ? 1 : 0; 
  // hip lower than knee (MediaPipe y increases downward)

  // --- Final Accuracy ---
  const accuracy = kneeScore * 0.7 + depthScore * 0.3;

  return {
    pose: "Squat",
    accuracy,
    detected: accuracy > 0.6
  };
};


  const checkArmRaise = (landmarks) => {
    const leftShoulder = landmarks[11];
    const rightShoulder = landmarks[12];
    const leftWrist = landmarks[15];
    const rightWrist = landmarks[16];

    // Check if arms are raised overhead
    const leftArmRaised = leftWrist.y < leftShoulder.y - 0.2 ? 1 : 0;
    const rightArmRaised = rightWrist.y < rightShoulder.y - 0.2 ? 1 : 0;
    
    const armsOverhead = (leftArmRaised + rightArmRaised) / 2;

    const accuracy = armsOverhead;
    
    return { pose: 'Arm Raise', accuracy };
  };

  useEffect(() => {
    const loadMediaPipeScripts = () => {
      return new Promise((resolve, reject) => {
        if (window.Pose && window.drawConnectors && window.drawLandmarks && window.POSE_CONNECTIONS) {
          resolve();
          return;
        }

        const scripts = [
          'https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js',
          'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js',
          'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js'
        ];

        let loadedCount = 0;
        const totalScripts = scripts.length;

        const checkAllLoaded = () => {
          loadedCount++;
          if (loadedCount === totalScripts) {
            setTimeout(() => {
              if (window.Pose && window.drawConnectors && window.drawLandmarks) {
                resolve();
              } else {
                reject(new Error('MediaPipe components not properly initialized'));
              }
            }, 100);
          }
        };

        scripts.forEach(src => {
          if (document.querySelector(`script[src="${src}"]`)) {
            checkAllLoaded();
            return;
          }

          const script = document.createElement('script');
          script.src = src;
          script.onload = checkAllLoaded;
          script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
          document.head.appendChild(script);
        });
      });
    };

    const initializePoseDetection = async () => {
      try {
        await loadMediaPipeScripts();

        const pose = new window.Pose({
          locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
          }
        });

        pose.setOptions({
          modelComplexity: 1,
          smoothLandmarks: true,
          enableSegmentation: false,
          smoothSegmentation: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });

        pose.onResults((results) => {
          const canvas = canvasRef.current;
          const video = videoRef.current;
          if (!canvas || !video) return;

          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Draw the video frame
          ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

          if (results.poseLandmarks) {
            // Detect pose or exercise based on mode
            const poseResult = detectPose(results.poseLandmarks);
            const accuracyPercent = Math.round(poseResult.accuracy * 100);

          setCurrentPose(poseResult.pose);
          setPoseAccuracy(accuracyPercent);

            // Feedback logic
            if (accuracyPercent === 97) {
              setFeedback('Perfect!!');
            } else if (accuracyPercent >= 70) {
              setFeedback('Almost there, adjust slightly');
            } else if (accuracyPercent >= 50) {
              setFeedback('Good attempt, keep correcting');
            } else {
              setFeedback('Pose not correct, follow the guide');
            }

            const now = Date.now();

            // Increment rep immediately if accuracy >= 93
if (accuracyPercent >= 92) {
  setReps(prev => prev + 1);

  // Reset hold logic (optional)
  setIsHoldingPose(false);
  setHoldStartTime(null);
} else {
  // For poses that require holding, maintain old hold logic
  if (accuracyPercent >= REP_ACCURACY_THRESHOLD && !isHoldingPose) {
    setIsHoldingPose(true);
    setHoldStartTime(now);
  }

  if (accuracyPercent >= REP_ACCURACY_THRESHOLD && isHoldingPose) {
    if (now - holdStartTime >= HOLD_TIME_REQUIRED) {
      setReps(prev => prev + 1);
      setIsHoldingPose(false);
      setHoldStartTime(null);
    }
  }

  if (accuracyPercent < REP_ACCURACY_THRESHOLD && isHoldingPose) {
    setIsHoldingPose(false);
    setHoldStartTime(null);
  }
}


            // Use the drawing utilities from the global scope
            if (window.drawConnectors && window.POSE_CONNECTIONS) {
              window.drawConnectors(ctx, results.poseLandmarks, window.POSE_CONNECTIONS, {
                color: '#00FF00',
                lineWidth: 4
              });
            }
            
            if (window.drawLandmarks) {
              window.drawLandmarks(ctx, results.poseLandmarks, {
                color: '#FF0000',
                lineWidth: 2
              });
            }

            // Display information on canvas
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(10, 10, 350, 100);
            ctx.fillStyle = 'white';
            ctx.font = '18px Arial';
            ctx.fillText(`Mode: Yoga`, 20, 35);
            ctx.fillText(`Pose: ${poseResult.pose}`, 20, 60);
            ctx.fillText(`Accuracy: ${Math.round(poseResult.accuracy * 100)}%`, 20, 85);
            ctx.fillText(`Reps: ${reps}`, 20, 110);
          }
          ctx.restore();
        });

        // Initialize camera
        await initializeCamera(pose);

      } catch (err) {
        console.error('Error initializing pose detection:', err);
        setError(err.message || 'Failed to initialize pose detection. Please check console for details.');
      }
    };

    const initializeCamera = async (pose) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          
          videoRef.current.onloadedmetadata = () => {
            setIsLoaded(true);
            if (window.Camera) {
              const camera = new window.Camera(videoRef.current, {
                onFrame: async () => {
                  await pose.send({ image: videoRef.current });
                },
                width: 640,
                height: 480
              });
              camera.start();
            } else {
              processVideoFrame(pose);
            }
          };
        }
      } catch (err) {
        console.error('Camera error:', err);
        setError('Failed to access camera. Please ensure you have granted camera permissions.');
      }
    };

    const processVideoFrame = (pose) => {
      if (!videoRef.current || videoRef.current.readyState < 2) {
        requestAnimationFrame(() => processVideoFrame(pose));
        return;
      }

      pose.send({ image: videoRef.current });
      requestAnimationFrame(() => processVideoFrame(pose));
    };

    initializePoseDetection();

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [mode]);

  const resetReps = () => {
    setReps(0);
  };

  const getInstructions = () => {
    // if (mode === 'yoga') {
    //   return "Try: Mountain Pose, Tree Pose, Warrior II, Downward Dog";
    // } else {
      return "Try: Seated Forward Bend (Paschimottanasana), Tree Pose (Vrikshasana), Warrior II (Virabhadrasana II), Downward Dog (Adho Mukha Svanasana), Triangle Pose (Trikonasana)";
;
    // }
  };

useEffect(() => {
  const interval = setInterval(() => {
    setTimer(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};


  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black',
      overflow: 'hidden'
    }}>
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scaleX(-1)'
        }}
        autoPlay
        playsInline
        muted
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scaleX(-1)'
        }}
      />
      
      {/* 3D Pose Toggle Button */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10
      }}>
        <button
          onClick={() => setShow3DPose(!show3DPose)}
          style={{
            padding: '10px 20px',
            backgroundColor: show3DPose ? '#9C27B0' : '#555',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>3D Pose</span>
          <span>{show3DPose ? '▼' : '▶'}</span>
        </button>
      </div>

      {/* 3D Pose Image Display */}
      {show3DPose && (
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          width: '300px',
          height: '400px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: '10px',
          padding: '10px',
          zIndex: 10,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            color: 'white'
          }}>
            <h4 style={{ margin: 0 }}>Pose Reference</h4>
            <button
              onClick={() => setShow3DPose(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px'
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            width: '100%',
            height: 'calc(100% - 40px)',
            overflow: 'hidden',
            borderRadius: '5px'
          }}>
            <img
              src={get3DPoseImage()}
              alt={`3D ${currentPose}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1545389336-cf093960735f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            right: '10px',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '14px'
          }}>
            {currentPose}
          </div>
        </div>
      )}

      {/* Pose information display */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '15px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        zIndex: 10
      }}>

      <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px'
}}>
  <h3 style={{ margin: 0 }}>Yoga Pose Detection</h3>

  <button
    onClick={() => setIsMuted(!isMuted)}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      fontSize: '22px'
    }}
    title={isMuted ? 'Unmute' : 'Mute'}
  >
    {isMuted ? '🔇' : '🔊'}
  </button>
</div>

        {/* <h3 style={{ margin: '0 0 10px 0' }}>
          {
            // mode === 'yoga' ? 
            'Yoga Pose Detection' 
            // : 
            // 'Physiotherapy Exercises'
          }
        </h3> */}
        <div>Current: <strong>{currentPose}</strong></div>
        <div>Accuracy: <strong>{poseAccuracy}%</strong></div>
        <div>Time: <strong>{formatTime(timer)}</strong></div>

<div style={{
  marginTop: '8px',
  padding: '6px',
  backgroundColor: poseAccuracy === 100 
    ? 'rgba(0,128,0,0.8)' 
    : 'rgba(255,165,0,0.8)',
  borderRadius: '5px',
  textAlign: 'center',
  fontWeight: 'bold'
}}>
  {feedback}
</div>

        <div>Reps: <strong>{reps}</strong></div>
        <button 
          onClick={resetReps}
          style={{
            marginTop: '10px',
            padding: '8px 15px',
            fontSize: '14px',
            cursor: 'pointer',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            width: '100%'
          }}
        >
          Reset Reps
        </button>
      </div>

      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '10px 20px',
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        {getInstructions()}
      </div>
      
      {!isLoaded && !error && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white', 
          fontSize: '20px',
          textAlign: 'center'
        }}>
          Loading MediaPipe and camera...
        </div>
      )}
      
      {error && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white', 
          fontSize: '18px',
          textAlign: 'center',
          backgroundColor: 'rgba(255,0,0,0.7)',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '80%'
        }}>
          {error}
          <br />
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default YogaPoseDetector
