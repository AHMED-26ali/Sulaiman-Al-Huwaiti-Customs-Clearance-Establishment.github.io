import { Eye, Target, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function Vision() {
  const visionPoints = [
    {
      icon: Eye,
      title: "رؤيتنا",
      description: "أن نكون الشركة الرائدة في مجال التخليص الجمركي والخدمات اللوجستية في المملكة العربية السعودية والمنطقة، من خلال تقديم حلول مبتكرة وخدمات عالية الجودة تلبي احتياجات عملائنا وتساهم في نمو التجارة الدولية."
    },
    {
      icon: Target,
      title: "رسالتنا",
      description: "نلتزم بتقديم خدمات التخليص الجمركي والنقل والشحن بأعلى معايير الجودة والاحترافية، مع الحرص على بناء علاقات طويلة الأمد مع عملائنا القائمة على الثقة والشفافية والتميز في الأداء."
    },
    {
      icon: Lightbulb,
      title: "قيمنا",
      description: "نؤمن بالنزاهة والشفافية في جميع تعاملاتنا، ونسعى للتطوير المستمر والابتكار في خدماتنا، مع الحرص على تحقيق رضا العملاء والمساهمة في تطوير القطاع اللوجستي في المملكة."
    },
    {
      icon: Heart,
      title: "التزامنا",
      description: "نلتزم بخدمة عملائنا على مدار الساعة، وتقديم الدعم الفني المتخصص، والحفاظ على أعلى مستويات الأمان والموثوقية في جميع عملياتنا، مع السعي المستمر لتجاوز توقعات عملائنا."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      <ParticleBackground id="vision-particles" color="#a855f7" opacity={0.5} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">رؤيتنا ورسالتنا</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            نسعى لتحقيق التميز والريادة في مجال التخليص الجمركي والخدمات اللوجستية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}