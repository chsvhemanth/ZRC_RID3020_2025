import { Coffee, Utensils } from "lucide-react";
import { Card } from "./ui/card";
import logo from "@/assets/rac-rgb-logo.png";

const FoodSection = () => {
  const meals = [
    {
      title: "Welcome Coffee",
      description: "Fresh coffee, tea, and light refreshments to start your day",
      icon: Coffee,
    },
    {
      title: "Lunch Buffet",
      description: "Diverse menu with vegetarian and non-vegetarian options",
      icon: Utensils,
    },
    {
      title: "Refreshment Breaks",
      description: "Snacks and beverages throughout the conference",
      icon: Coffee,
    },
  ];

  return (
    <section id="food" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Food & Refreshments</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Delicious meals and refreshments to keep you energized throughout the conference
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {meals.map((meal, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <meal.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{meal.title}</h3>
              <p className="text-muted-foreground">{meal.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Special Dietary Requirements</h3>
          <p className="text-center text-muted-foreground mb-4">
            We cater to various dietary preferences and restrictions. Please inform us during registration about:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold">Vegetarian</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold">Vegan</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold">Gluten-Free</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-semibold">Allergies</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FoodSection;
