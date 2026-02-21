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
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a5f7a]/95 to-[#0f4d63]/95 z-10" />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/facility-2.jpg)', opacity: 0.2 }} />
                <div className="relative z-20 p-8 md:p-12 flex flex-col h-full">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/15 mb-6 group-hover:bg-white/25 transition-all duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t(mv.mission.title, mv.mission.titleSo)}
                  </h2>
                  <div className="w-12 h-1 bg-white/40 mb-6" />
                  <p className="text-lg text-white/95 leading-relaxed flex-grow">
                    {t(mv.mission.content, mv.mission.contentSo)}
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a7a9b]/95 to-[#1a5f7a]/95 z-10" />
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/facility-3.jpg)', opacity: 0.2 }} />
                <div className="relative z-20 p-8 md:p-12 flex flex-col h-full">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/15 mb-6 group-hover:bg-white/25 transition-all duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t(mv.vision.title, mv.vision.titleSo)}
                  </h2>
                  <div className="w-12 h-1 bg-white/40 mb-6" />
                  <p className="text-lg text-white/95 leading-relaxed flex-grow">
                    {t(mv.vision.content, mv.vision.contentSo)}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Philosophy</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b] mx-auto mb-6" />
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                <span className="font-bold text-[#1a5f7a]">Relevant. Responsible. Resilient.</span><br className="my-2" />
                At Ablaal Schools, education is more than academic success—it develops capable, principled individuals prepared for a dynamic future.
              </p>
            </div>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Relevant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-200"
              >
                <div className="h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2a7a9b]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center mb-6 group-hover:bg-[#1a5f7a]/20 transition-colors">
                    <svg className="w-7 h-7 text-[#1a5f7a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-4">Relevant</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We emphasize academic excellence alongside skills for modern success: critical thinking, creativity, and innovation. Our learners master technology wisely and apply knowledge to real-world challenges.
                  </p>
                </div>
              </motion.div>

              {/* Responsible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-200"
              >
                <div className="h-1 bg-gradient-to-r from-[#2a7a9b] to-[#1a5f7a]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center mb-6 group-hover:bg-[#1a5f7a]/20 transition-colors">
                    <svg className="w-7 h-7 text-[#1a5f7a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-4">Responsible</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Character equals knowledge. We nurture integrity, empathy, and accountability. Students respect others, own their actions, and contribute positively to communities, growing into ethical leaders and global citizens.
                  </p>
                </div>
              </motion.div>

              {/* Resilient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-200"
              >
                <div className="h-1 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center mb-6 group-hover:bg-[#1a5f7a]/20 transition-colors">
                    <svg className="w-7 h-7 text-[#1a5f7a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-4">Resilient</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Success requires perseverance. We help students face challenges with confidence and adaptability. Through growth-focused support, learners develop resilience—overcoming setbacks and continually striving toward goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
