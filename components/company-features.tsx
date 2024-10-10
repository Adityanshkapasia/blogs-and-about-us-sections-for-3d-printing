import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, Layers, Zap, Users } from 'lucide-react';

const features = [
  {
    title: 'Cutting-edge Technology',
    description: 'Our state-of-the-art 3D printers ensure precision and quality in every print.',
    icon: Printer,
  },
  {
    title: 'Wide Range of Materials',
    description: 'From standard PLA to exotic filaments, we offer a diverse selection to suit your needs.',
    icon: Layers,
  },
  {
    title: 'Rapid Prototyping',
    description: 'Turn your ideas into tangible prototypes quickly and efficiently.',
    icon: Zap,
  },
  {
    title: 'Expert Support',
    description: 'Our team of 3D printing experts is always ready to assist you with any questions or challenges.',
    icon: Users,
  },
];

export function CompanyFeatures() {
  return (
    <div className="bg-gray-100 w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}