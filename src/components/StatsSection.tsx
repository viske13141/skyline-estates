import { Users, Building, UserCheck, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Customers",
    color: "text-primary"
  },
  {
    icon: Building,
    number: "700+",
    label: "Properties",
    color: "text-secondary"
  },
  {
    icon: UserCheck,
    number: "200+",
    label: "Expert Agents",
    color: "text-accent"
  },
  {
    icon: MapPin,
    number: "10+",
    label: "Cities Covered",
    color: "text-primary-glow"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass-card p-8 rounded-3xl hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors duration-500">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {stat.number}
              </h3>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};