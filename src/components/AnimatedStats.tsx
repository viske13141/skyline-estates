import { useEffect, useRef, useState } from "react";
import { Users, Building, UserCheck, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "+",
    label: "Happy Customers",
    color: "text-primary"
  },
  {
    icon: Building,
    number: 700,
    suffix: "+",
    label: "Properties",
    color: "text-secondary"
  },
  {
    icon: UserCheck,
    number: 200,
    suffix: "+",
    label: "Expert Agents",
    color: "text-accent"
  },
  {
    icon: MapPin,
    number: 10,
    suffix: "+",
    label: "Cities Covered",
    color: "text-primary-glow"
  }
];

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  isVisible: boolean;
}

const AnimatedCounter = ({ target, duration = 2000, suffix = "", isVisible }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutCubic);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    // Start animation after a small delay
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 200);

    return () => clearTimeout(timer);
  }, [target, duration, isVisible, hasAnimated]);

  return (
    <span className="gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center glass-card p-8 rounded-3xl hover-glow group transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="relative p-4 rounded-full bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-500 group-hover:scale-110">
                  <stat.icon className={`h-8 w-8 ${stat.color} transition-transform duration-500 group-hover:rotate-12`} />
                  
                  {/* Pulse Ring Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-105">
                <AnimatedCounter 
                  target={stat.number} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </h3>
              
              <p className="text-muted-foreground text-lg transition-colors duration-300 group-hover:text-foreground">
                {stat.label}
              </p>

              {/* Floating Particles on Hover */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 100}ms`,
                      animation: 'float 3s infinite ease-in-out'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};