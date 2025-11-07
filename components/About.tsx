import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-off-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest font-bold mb-8">Notre Histoire</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Derrière chaque logo, une histoire. <em>La nôtre ? Elle commence dans un bar.</em></h3>
              <p className="text-lg text-brand-dark/80 mb-6">
                Imaginez un soir, au cœur de Strasbourg Saint-Denis, un bar vibrant d'énergie. Ce n'était pas juste un lieu, c'était <strong>un carrefour de destins, un bouillon de culture</strong> où les rires fusaient aussi librement que la bière coulait.
              </p>
              <p className="text-lg text-brand-dark/80 mb-6">
                C'est là que tout a commencé, avec une bande improbable : un Italien passionné, une Suédoise à l'esprit libre et une Anglaise pleine d'audace. Trois âmes, trois cultures, un même désir de créer quelque chose d'<strong>unique</strong>.
              </p>
              <p className="text-lg text-brand-dark/80 mb-6">
                Dans ce tourbillon de rencontres et d'idées, au milieu de jeunes branchés qui voulaient vivre et aimer sans contraintes, l'étincelle est née. Une étincelle qui, <strong>51 minutes plus tard</strong>, allait donner vie à notre vision.
              </p>
              <p className="text-lg text-brand-dark/80 italic">
                Notre logo est le reflet de cette effervescence, de ces moments partagés, de cette liberté. Il incarne la bière qui rassemble, les rires qui unissent, et l'audace de ces trois fondateurs venus d'horizons différents.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold mb-6">Our Philosophy</h3>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed italic mb-8">
                "Mon cœur bat pour l'authenticité et la chaleur humaine, et 'Good Hand Good Fingers' m'appelle à créer quelque chose de profondément intime et expressif."
              </p>
              <p className="text-lg text-brand-dark/80 mb-6">
                C'est précis, fonctionnel, et intemporel, une marque qui parle de <strong>connexion et de raffinement</strong> sans jamais être explicite, <em>laissant l'imagination faire le reste.</em>
              </p>
              <p className="text-lg text-brand-dark/80">
                Des mains élégantes, stylisées à la manière des anciennes illustrations, pour un design <strong>résolument tourné vers l'avenir</strong>.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
