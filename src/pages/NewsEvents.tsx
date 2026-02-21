import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PinnedHero, PinnedSection } from '@/components/ui-custom';
import { useLanguage } from '@/hooks/useLanguage';
import content from '@/data/contentLoader';

export function NewsEvents() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const newsEvents = content.newsEvents;

  // Check for active jobs
  const activeJobs = newsEvents.jobs.filter(job => job.isActive);

  const categories = [
    { key: 'all', label: 'All', labelSo: 'Dhammaan' },
    { key: 'news', label: 'News', labelSo: 'Wararka' },
    { key: 'events', label: 'Events', labelSo: 'Dhacdooyinka' },
    { key: 'announcements', label: 'Announcements', labelSo: 'Ogeysiisyada' },
    ...(activeJobs.length > 0 ? [{ key: 'jobs', label: 'Jobs', labelSo: 'Shaqooyinka' }] : []),
  ];

  const allItems = [
    ...newsEvents.items,
    ...activeJobs.map(job => ({
      id: job.id,
      title: job.title,
      titleSo: job.titleSo,
      excerpt: job.description,
      excerptSo: job.descriptionSo,
      category: 'jobs' as const,
      date: job.deadline,
      image: '/images/job-default.jpg',
      isJob: true,
      jobType: job.type,
    })),
  ];

  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      t(item.title, item.titleSo).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(item.excerpt, item.excerptSo).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Pinned Hero */}
      <PinnedHero
        backgroundImage="/images/gallery-3.jpg"
        title={t('News & Events', 'Wararka & Dhacdooyinka')}
        subtitle={t('Stay updated with the latest from Ablaal Schools', 'U hoggaansama cusub ee ka yimid Dugsiyada Ablaal')}
        overlayOpacity={0.5}
      />

      {/* Search & Filter Section */}
      <section className="py-12 bg-gradient-to-r from-[#1a5f7a] to-[#0f4d63]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative w-full md:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder={t('Search news and events...', 'Raadi wararka iyo dhacdooyinka...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 rounded-lg bg-white border-0 text-slate-900 placeholder:text-slate-400 h-12 shadow-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedCategory === cat.key
                        ? 'bg-white text-[#1a5f7a] shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {t(cat.label, cat.labelSo)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid - Modern Layout */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 max-w-6xl mx-auto">
              <p className="text-slate-500 text-lg">{t('No items found', 'Waxba lama helin')}</p>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {filteredItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -12, boxShadow: '0 30px 50px -5px rgba(26, 95, 122, 0.2)' }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col h-full cursor-pointer"
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden bg-slate-200">
                      <motion.img
                        src={item.image}
                        alt={t(item.title, item.titleSo)}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute top-3 left-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.span 
                          className={`px-3 py-1 text-xs font-bold rounded-lg uppercase backdrop-blur-sm ${
                            item.category === 'jobs'
                              ? 'bg-green-500/90 text-white'
                              : item.category === 'events'
                              ? 'bg-blue-500/90 text-white'
                              : item.category === 'announcements'
                              ? 'bg-orange-500/90 text-white'
                              : 'bg-[#1a5f7a]/90 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {t(item.category, item.category)}
                        </motion.span>
                      </motion.div>
                      {'isJob' in item && (
                        <motion.div 
                          className="absolute top-3 right-3"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div 
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                          >
                            <Briefcase className="w-5 h-5 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <motion.div 
                        className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1a5f7a] transition-colors line-clamp-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                      >
                        {t(item.title, item.titleSo)}
                      </motion.h3>
                      <motion.p 
                        className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {t(item.excerpt, item.excerptSo)}
                      </motion.p>
                      <motion.div 
                        className="pt-4 border-t border-slate-100"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        {'isJob' in item ? (
                          <motion.div
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to="/jobs/apply"
                              className="inline-flex items-center text-[#1a5f7a] font-semibold text-sm hover:gap-2 transition-all"
                            >
                              {t('Apply Now', 'Codso Hadda')}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={`/news-events/${item.id}`}
                              className="inline-flex items-center text-[#1a5f7a] font-semibold text-sm hover:gap-2 transition-all"
                            >
                              {t('Read More', 'Akhri Wax Badan')}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
