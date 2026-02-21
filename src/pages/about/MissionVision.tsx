import { motion } from 'framer-motion';
import { PinnedHero, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function MissionVision() {
  const { t } = useLanguage();
  const mv = content.about.missionVision;

  const sections = [
    { key: 'whoWeAre', icon: '1', bgImage: '/images/facility-1.jpg' },
    { key: 'core', icon: '2', bgImage: '/images/facility-2.jpg' },
    // Mission and Vision will be handled separately below
    { key: 'purpose', icon: '5', bgImage: '/images/discover.jpg' },
  ] as const;

  return (
    <div className="min-h-screen">
      {/* Pinned Hero */}
      <PinnedHero
        backgroundImage="/images/service-2.jpg"
        title={t('Mission & Vision', 'Ujeeddo & Aragti')}
        subtitle={t('Our guiding principles and aspirations', "Mabaadi'da iyo himilooyinka hogaamiya")}
        overlayOpacity={0.5}
      />

      {/* Mission & Vision Modern Two-Column Layout */}
      <PinnedSection
        backgroundImage="/images/facility-3.jpg"
        overlayOpacity={0.7}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-10">
              {/* Mission Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t(mv.mission.title, mv.mission.titleSo)}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-6" />
                <p className="text-lg text-white/90 leading-relaxed">
                  {t(mv.mission.content, mv.mission.contentSo)}
                </p>
              </div>
              {/* Vision Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t(mv.vision.title, mv.vision.titleSo)}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-6" />
                <p className="text-lg text-white/90 leading-relaxed">
                  {t(mv.vision.content, mv.vision.contentSo)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </PinnedSection>

      {/* Other Content Sections - Each with Pinned Background */}
      {sections.map((section, index) => {
        const data = mv[section.key];
        return (
          <PinnedSection
            key={section.key}
            backgroundImage={section.bgImage}
            overlayOpacity={0.75}
            contentClassName="py-20 md:py-32"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{section.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t(data.title, data.titleSo)}
                      </h2>
                      <div className="w-16 h-1 bg-primary mb-6" />
                      <p className="text-lg text-white/90 leading-relaxed">
                        {t(data.content, data.contentSo)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PinnedSection>
        );
      })}

      {/* Our Philosophy Section - Redesigned */}
      <PinnedSection
        backgroundImage="/images/facility-2.jpg"
        overlayOpacity={0.8}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl p-0 flex flex-col items-center overflow-hidden relative">
              {/* Decorative vertical line for timeline effect */}
              <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-1 bg-primary/40 z-0" style={{transform: 'translateX(-50%)'}} />
              <div className="w-full flex flex-col items-center text-center px-6 pt-12 pb-4 z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Our Philosophy</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-4" />
                <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                  <span className="font-bold text-primary">Relevant. Responsible. Resilient.</span><br />
                  At Ablaal Schools, education is more than the pursuit of academic success—it is the development of capable, principled, and adaptable individuals prepared for the future.
                </p>
              </div>
              {/* Steps/Timeline for 3 Pillars */}
              <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 px-6 pb-12 z-10">
                {/* Relevant */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 mb-4 shadow-xl border-4 border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-2">Relevant</h3>
                  <p className="text-white/90 text-base mb-2">
                    We place strong emphasis on academic excellence as the foundation for lifelong learning and higher education. At the same time, we equip our students with the skills needed to succeed in a fast-changing world—critical thinking, creativity, and innovation.
                  </p>
                  <p className="text-white/80 text-sm">
                    With technology and artificial intelligence transforming modern life, our learners are guided to use digital tools wisely and responsibly. They become confident, forward-thinking individuals who can apply knowledge to real-world challenges and opportunities.
                  </p>
                </div>
                {/* Responsible */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 mb-4 shadow-xl border-4 border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01M12 8v.01M12 16v.01" /></svg>
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-2">Responsible</h3>
                  <p className="text-white/90 text-base mb-2">
                    We believe character is as important as knowledge. Ablaal Schools nurtures students who act with integrity, empathy, and accountability.
                  </p>
                  <p className="text-white/80 text-sm">
                    Our learners are encouraged to respect others, take ownership of their actions, and contribute positively to their communities. Through this sense of responsibility, they grow into ethical leaders and engaged global citizens.
                  </p>
                </div>
                {/* Resilient */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/90 mb-4 shadow-xl border-4 border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-2">Resilient</h3>
                  <p className="text-white/90 text-base mb-2">
                    Success requires perseverance. We prepare our students to face challenges with confidence, adaptability, and determination.
                  </p>
                  <p className="text-white/80 text-sm">
                    By fostering a supportive environment that values growth and reflection, we help learners develop resilience—the ability to overcome setbacks, embrace change, and continue striving toward their goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PinnedSection>

      {/* Our Brand Promise Section */}
      <PinnedSection
        backgroundImage="/images/cta-bg.jpg"
        overlayOpacity={0.7}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Brand Promise</h2>
              <div className="w-16 h-1 bg-primary mb-6" />
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                At Ablaal Schools, we are dedicated to nurturing well-rounded individuals who are prepared not only for examinations, but for life.<br /><br />
                We aim to develop students who are:
              </p>
              <ul className="list-disc pl-6 text-white/90 mb-6">
                <li>Relevant in a rapidly evolving world</li>
                <li>Responsible in their actions and contributions</li>
                <li>Resilient in overcoming challenges and achieving success</li>
              </ul>
              <p className="text-lg text-white/90 leading-relaxed">
                Through this commitment, we empower every learner to reach their full potential and make a lasting impact on society.
              </p>
            </div>
          </motion.div>
        </div>
      </PinnedSection>

      {/* Values Preview - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/cta-bg.jpg"
        overlayOpacity={0.7}
        contentClassName="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('What We Uphold', 'Waxaan Xoojinnaa')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-white/90 mb-8">
                {t("Our core values guide everything we do at Ablaal Schools. They shape our culture, inform our decisions, and inspire our community.", 
                   "Qiimayaasha aasaasiga ah ee waxay hogaamiyaan wax kasta oo aan ku sameyno Dugsiyada Ablaal. Waxay qeexayaan dhaqankeena, waxay macluumaadka u ah go'aannadeena, waxayna dhiirrigeliyaan bulshadeena.")}
              </p>
              <a
                href="/about/core-values"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                {t('Explore Our Core Values', 'Sahaminta Qiimayaasha Aasaasiga ah')}
              </a>
            </div>
          </motion.div>
        </div>
      </PinnedSection>
    </div>
  );
}
