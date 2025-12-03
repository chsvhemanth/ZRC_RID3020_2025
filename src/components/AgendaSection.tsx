import { Calendar, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AgendaSection = () => {
  const agenda = {
    day1: [
      { time: "09:00 AM", title: "Registration & Welcome Coffee", description: "Check-in and networking" },
      { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address by dignitaries" },
      { time: "11:30 AM", title: "Keynote Session", description: "Inspiring leadership talk" },
      { time: "01:00 PM", title: "Lunch Break", description: "Networking lunch" },
    ],
    day2: [
      { time: "02:30 PM", title: "Workshop Session 2", description: "Skill development sessions" },
      { time: "05:00 PM", title: "Evening Social", description: "Informal networking" },
    ],
    day3: [
      { time: "11:30 AM", title: "Closing Ceremony", description: "Final remarks and vote of thanks" },
      { time: "12:30 PM", title: "Farewell Lunch", description: "Closing networking lunch" },
    ],
  };

  return (
    <section id="agenda" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-yellow-500 uppercase tracking-widest">Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-yellow-500 to-accent bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            A day of Learning, Networking and enjoyment with engaging sessions and activities with fellow Rotaractors
        </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-muted/60 backdrop-blur-md border-2 border-primary/20 rounded-xl p-1">
            <TabsTrigger value="day1" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg font-semibold">Morning 10AM to 1PM</TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg font-semibold">Afternoon 2PM to 5PM</TabsTrigger>
            <TabsTrigger value="day3" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg font-semibold">Evening 6PM to 9PM</TabsTrigger>
          </TabsList>
          
          {Object.entries(agenda).map(([day, events]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-5">
                {events.map((event, index) => (
                  <Card 
                    key={index} 
                    className="p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary bg-gradient-to-r from-card via-card/95 to-card/90 backdrop-blur-sm group border-2 border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center gap-3 text-primary font-bold min-w-[160px] px-5 py-3 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <Clock className="h-5 w-5 text-yellow-400" />
                        <span className="text-base">{event.time}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-base">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
