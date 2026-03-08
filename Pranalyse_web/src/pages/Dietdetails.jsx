import React from "react";
import { useParams } from "react-router-dom";

const dietData = {
  calories: {
    title: "Calories",
    desc: "Calories measure the energy you get from food. Balancing your calorie intake helps with weight management and energy levels.",
    details:
      "Calories are the energy currency for your body. Consuming too many can lead to weight gain, while too few can cause fatigue and nutrient deficiencies.",
    deficiency: "Low calorie intake may cause fatigue, dizziness, and muscle loss.",
    recommended: "Average adult requires 2000-2500 kcal/day depending on activity level.",
    foods: {
      include: ["Whole grains", "Lean meats", "Nuts & seeds", "Fruits & vegetables"],
      avoid: ["Sugary drinks", "Processed snacks", "Fried fast foods"]
    },
    tips: [
      "Track your daily intake",
      "Eat nutrient-dense foods",
      "Avoid excessive processed sugars"
    ]
  },
  protein: {
    title: "Protein",
    desc: "Protein supports muscle growth, repair, and recovery. Ensure adequate protein based on your activity level.",
    details:
      "Proteins are the building blocks of muscles, enzymes, and hormones. Adequate protein intake is crucial for recovery and metabolic function.",
    deficiency: "Low protein intake can cause muscle loss, weak immunity, and slower recovery.",
    recommended: "Adults need 0.8–1g protein per kg body weight, more for athletes.",
    foods: {
      include: ["Eggs", "Chicken", "Legumes", "Greek yogurt", "Tofu"],
      avoid: ["Processed meats", "High-fat snacks"]
    },
    tips: [
      "Include lean meats, eggs, and legumes",
      "Consume protein after workouts",
      "Spread protein throughout the day"
    ]
  },
  carbs: {
    title: "Carbohydrates",
    desc: "Carbs provide energy for your body. Focus on complex carbs for sustained energy.",
    details:
      "Carbohydrates are your body's primary energy source. Complex carbs like whole grains release energy slowly, keeping you fueled throughout the day.",
    deficiency: "Low carb intake can lead to fatigue, dizziness, and poor exercise performance.",
    recommended: "45–65% of daily calories should come from carbohydrates.",
    foods: {
      include: ["Whole grains", "Fruits", "Vegetables", "Legumes"],
      avoid: ["Sugary drinks", "White bread", "Candy", "Pastries"]
    },
    tips: [
      "Prefer whole grains",
      "Avoid refined sugars",
      "Pair with protein for better absorption"
    ]
  },

  fats: {
    title: "Fats",
    desc: "Healthy fats are vital for hormones, brain function, and energy. Balance your fat intake carefully.",
    details:
      "Fats are essential for brain health, hormone production, and cellular function. Focus on unsaturated fats while limiting saturated and trans fats.",
    deficiency: "Too little fat can lead to dry skin, hormone imbalance, and poor nutrient absorption.",
    recommended: "20–35% of daily calories should come from fats, mostly unsaturated.",
    foods: {
      include: ["Olive oil", "Avocados", "Nuts & seeds", "Fatty fish"],
      avoid: ["Trans fats", "Fried foods", "High-fat processed snacks"]
    },
    tips: [
      "Use olive oil, nuts, and seeds",
      "Avoid trans fats",
      "Include omega-3 rich foods"
    ]
  },

  vitamins: {
    title: "Vitamins",
    desc: "Vitamins are essential for immunity, energy, and overall health.",
    details:
      "Vitamins are micronutrients needed for enzyme function, immunity, and overall well-being. Each vitamin has a unique role in your body.",
    deficiency: "Vitamin deficiencies can cause fatigue, weak immunity, poor vision, and more depending on the vitamin.",
    recommended: "Eat a variety of colorful fruits and vegetables to cover all essential vitamins.",
    foods: {
      include: ["Leafy greens", "Citrus fruits", "Berries", "Fortified cereals"],
      avoid: ["Excessive processed foods", "Sugary snacks"]
    },
    tips: [
      "Eat a variety of colorful vegetables",
      "Consider a multivitamin if needed",
      "Include fruits rich in vitamin C"
    ]
  },

  minerals: {
    title: "Minerals",
    desc: "Minerals support bones, muscles, nerves, and hydration.",
    details:
      "Minerals like calcium, magnesium, potassium, and iron are essential for strong bones, muscle contraction, nerve signaling, and fluid balance.",
    deficiency: "Lack of minerals can lead to fatigue, cramps, weakened immunity, and bone problems.",
    recommended: "Ensure a balanced diet with dairy, nuts, seeds, and leafy vegetables.",
    foods: {
      include: ["Dairy products", "Leafy greens", "Nuts & seeds", "Legumes"],
      avoid: ["Highly processed foods lacking minerals"]
    },
    tips: [
      "Include dairy or fortified alternatives",
      "Eat leafy greens",
      "Stay hydrated for electrolyte balance"
    ]
  },

  hydration: {
    title: "Hydration",
    desc: "Water is crucial for digestion, circulation, and energy.",
    details:
      "Water is vital for all bodily functions, including temperature regulation, nutrient transport, and waste removal. Dehydration can significantly impact health and performance.",
    deficiency: "Dehydration can cause fatigue, headaches, dizziness, and poor cognitive function.",
    recommended: "Drink at least 2-3 liters of water daily, more with activity or heat.",
    foods: {
      include: ["Water", "Coconut water", "Fruits like watermelon", "Soups"],
      avoid: ["Sugary drinks", "Excess caffeine", "Alcohol in large amounts"]
    },
    tips: [
      "Drink at least 2-3 liters daily",
      "Add fruits for flavor",
      "Monitor urine color as hydration indicator"
    ]
  },

  fiber: {
    title: "Fiber",
    desc: "Fiber improves digestion and keeps you full.",
    details:
      "Dietary fiber supports healthy digestion, regulates blood sugar, and helps maintain a healthy weight. It is found in plant-based foods.",
    deficiency: "Low fiber intake may lead to constipation, poor gut health, and blood sugar fluctuations.",
    recommended: "Adults should aim for 25–30g of fiber daily from whole foods.",
    foods: {
      include: ["Whole grains", "Legumes", "Fruits", "Vegetables", "Nuts"],
      avoid: ["Refined grains", "Highly processed snacks"]
    },
    tips: [
      "Include whole grains and legumes",
      "Eat fruits and vegetables",
      "Increase intake gradually to avoid bloating"
    ]
  }
};

function DietDetails() {
  const { nutrient } = useParams();
  const data = dietData[nutrient.toLowerCase()];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-violet-500 text-white px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Sorry, this nutrient does not exist.
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800 px-6 py-20">
      {/* HERO */}
      <div
        className="relative h-80 rounded-xl overflow-hidden mb-16 shadow-lg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1655146475215-53b2d0452da8?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-violet-800">
            {data.title}
          </h1>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-xl mb-4">{data.desc}</p>
        <p className="text-slate-600 mb-4">{data.details}</p>
        <p className="text-slate-600 font-semibold">
          Recommended: {data.recommended}
        </p>
        <p className="text-red-600 mt-2">
          Deficiency may cause: {data.deficiency}
        </p>
      </div>

      {/* FOODS TO INCLUDE & AVOID */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4 text-violet-800">
              Foods to Include
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {data.foods.include.map((food, idx) => (
                <li key={idx}>{food}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Foods to Avoid
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {data.foods.avoid.map((food, idx) => (
                <li key={idx}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* TIPS */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">Tips</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-violet-100 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Tip {idx + 1}</h3>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FUN FACT / INSIGHT */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold text-violet-800 mb-4">
          Did You Know?
        </h2>
        <p className="text-slate-600">
          {data.title} plays a key role in maintaining energy, performance, and overall wellbeing. Consistently balancing this nutrient in your diet can improve both body and mind over time.
        </p>
      </div>
    </section>
  );
}

export default DietDetails;
