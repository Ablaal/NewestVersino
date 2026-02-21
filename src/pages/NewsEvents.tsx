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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full"
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden bg-slate-200">
                      <img
                        src={item.image}
                        alt={t(item.title, item.titleSo)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 text-xs font-bold rounded-lg uppercase backdrop-blur-sm ${
                          item.category === 'jobs'
                            ? 'bg-green-500/90 text-white'
                            : item.category === 'events'
                            ? 'bg-blue-500/90 text-white'
                            : item.category === 'announcements'
                            ? 'bg-orange-500/90 text-white'
                            : 'bg-[#1a5f7a]/90 text-white'
                        }`}>
                          {t(item.category, item.category)}
                        </span>
                      </div>
                      {'isJob' in item && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1a5f7a] transition-colors line-clamp-2">
                        {t(item.title, item.titleSo)}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {t(item.excerpt, item.excerptSo)}
                      </p>
                      <div className="pt-4 border-t border-slate-100">
                        {'isJob' in item ? (
                          <Link
                            to="/jobs/apply"
                            className="inline-flex items-center text-[#1a5f7a] font-semibold text-sm hover:gap-2 transition-all"
                          >
                            {t('Apply Now', 'Codso Hadda')}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        ) : (
                          <Link
                            to={`/news-events/${item.id}`}
                            className="inline-flex items-center text-[#1a5f7a] font-semibold text-sm hover:gap-2 transition-all"
                          >
                            {t('Read More', 'Akhri Wax Badan')}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
