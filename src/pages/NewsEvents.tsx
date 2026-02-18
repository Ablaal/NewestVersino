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

      {/* Search & Filter - Pinned Background */}
      <PinnedSection
        backgroundImage="/images/facility-3.jpg"
        overlayOpacity={0.8}
        contentClassName="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <Input
                  type="text"
                  placeholder={t('Search news and events...', 'Raadi wararka iyo dhacdooyinka...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.key
                        ? 'bg-primary text-white'
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
      </PinnedSection>

      {/* Content Grid - White Background */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('No items found', 'Waxba lama helin')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.title, item.titleSo)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                        item.category === 'jobs'
                          ? 'bg-green-500 text-white'
                          : item.category === 'events'
                          ? 'bg-blue-500 text-white'
                          : item.category === 'announcements'
                          ? 'bg-orange-500 text-white'
                          : 'bg-primary text-white'
                      }`}>
                        {t(item.category, item.category)}
                      </span>
                    </div>
                    {'isJob' in item && (
                      <div className="absolute top-4 right-4">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {t(item.title, item.titleSo)}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {t(item.excerpt, item.excerptSo)}
                    </p>
                    {'isJob' in item ? (
                      <Link
                        to="/jobs/apply"
                        className="inline-flex items-center text-gold font-semibold hover:underline"
                      >
                        {t('Apply Now', 'Codso Hadda')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    ) : (
                      <Link
                        to={`/news-events/${item.id}`}
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                      >
                        {t('Read More', 'Akhri Wax Badan')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
