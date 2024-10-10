import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Leaf, Lightbulb, Recycle } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    description: "We constantly push the boundaries of what's possible in 3D printing.",
    icon: Lightbulb,
  },
  {
    title: 'Sustainability',
    description: 'Our eco-friendly practices minimize waste and promote responsible manufacturing.',
    icon: Leaf,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.',
    icon: Heart,
  },
  {
    title: 'Circular Economy',
    description: 'We promote recycling and reusing materials to reduce environmental impact.',
    icon: Recycle,
  },
];

export function Values() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Values & Ethics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}