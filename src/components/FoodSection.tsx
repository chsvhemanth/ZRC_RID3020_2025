import { Coffee, Utensils } from "lucide-react";
import { Card } from "./ui/card";
import logo from "@/assets/rac-rgb-logo.png";

const FoodSection = () => {
  const meals = [
    {
      title: "Breakfast, Tea / Coffee",
      description: "Vada, Idly, Pesara Dosa with chicken curry, Chutney and Sambar along with Tea/ Coffee",
      icon: Coffee,
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Lunch Buffet",
      description: "Vegetarian : Veg Starter, Pulka, Mushroom / Paneer curry, Rice, Dal, Sambar, Curd. Non-Vegetarian : Chicken curry, Mutton Dum Biryani, Rice, Dal, Sambar, Curd",
      icon: Utensils,
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      title: "Dinner Buffet",
      description: "Vegetarian : Veg Starter, Pulka, Vegetable curry. Non-Vegetarian : Non-Veg Curry, Pulka",
      icon: Utensils,
      color: "from-purple-500/20 to-indigo-500/20",
    },
  ];

  return (
    <section id="food" className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Food & Refreshments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Delicious meals and refreshments to keep you energized throughout the Pragathi Zonal Meet
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {meals.map((meal, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 relative overflow-hidden group bg-gradient-to-br ${meal.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
              <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <meal.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {meal.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {meal.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 md:p-10 max-w-4xl mx-auto bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Food Preferences
            </h3>
            <p className="text-muted-foreground">
            We cater vegetarian and Non-Vegetarian Food Options. Please inform us during registration about:
          </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex-1 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border-2 border-green-500/20 hover:border-green-500/40 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <Utensils className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-bold text-lg group-hover:text-green-600 transition-colors">Vegetarian</p>
              </div>
            </div>
            <div className="flex-1 p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border-2 border-red-500/20 hover:border-red-500/40 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <Utensils className="h-8 w-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-bold text-lg group-hover:text-red-600 transition-colors">Non-Vegetarian</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FoodSection;
