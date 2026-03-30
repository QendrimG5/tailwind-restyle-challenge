import { ArrowRight, Play } from 'lucide-react'

function HeroStyled() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50/50 to-white dark:from-surface-950 dark:to-surface-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-8 dark:bg-brand-900/30 dark:text-brand-300">
          <span className="bg-brand-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">New</span>
          <span>Introducing AI-powered workflows</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-surface-900 tracking-tight leading-tight mb-6 font-heading dark:text-white">
          Manage your projects
          <br />
          <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">with confidence</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-surface-600 leading-relaxed mb-10 dark:text-surface-200">
          FlowBoard helps teams organize, track, and manage their work in one
          place. Boost productivity by 10x with our intuitive project management
          platform trusted by 50,000+ teams worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-button transition-all shadow-button hover:shadow-lg w-full sm:w-auto justify-center">
            <span>Start Free Trial</span>
            <ArrowRight size={18} />
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-surface-700 bg-white hover:bg-surface-50 border border-surface-300 rounded-button transition-all w-full sm:w-auto justify-center dark:bg-surface-800 dark:text-white dark:border-surface-800 dark:hover:bg-surface-800">
            <Play size={18} />
            <span>Watch Demo</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-900" />
              <img src="https://i.pravatar.cc/40?img=2" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-900" />
              <img src="https://i.pravatar.cc/40?img=3" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-900" />
              <img src="https://i.pravatar.cc/40?img=4" alt="User 4" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-900" />
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-surface-500 dark:text-surface-200">
                <span className="font-semibold text-surface-900 dark:text-white">4.9/5</span> from 2,000+ reviews
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-900 rounded-2xl shadow-2xl overflow-hidden border border-surface-800">
            <div className="flex items-center gap-3 px-4 py-3 bg-surface-800/80 border-b border-surface-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-surface-200 ml-2">FlowBoard Dashboard</span>
            </div>
            <div className="flex">
              <div className="w-48 p-4 border-r border-surface-800 hidden sm:block">
                <div className="h-3 bg-surface-800 rounded mb-4 w-24"></div>
                <div className="h-3 bg-brand-600/40 rounded mb-3 w-28"></div>
                <div className="h-3 bg-surface-800 rounded mb-3 w-20"></div>
                <div className="h-3 bg-surface-800 rounded mb-3 w-24"></div>
                <div className="h-3 bg-surface-800 rounded w-16"></div>
              </div>
              <div className="flex-1 p-4 sm:p-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="bg-surface-800 rounded-lg p-3 sm:p-4 text-left">
                    <p className="text-xs text-surface-200 mb-1">Total Tasks</p>
                    <p className="text-lg sm:text-xl font-bold text-white">1,284</p>
                  </div>
                  <div className="bg-surface-800 rounded-lg p-3 sm:p-4 text-left">
                    <p className="text-xs text-surface-200 mb-1">Completed</p>
                    <p className="text-lg sm:text-xl font-bold text-green-400">847</p>
                  </div>
                  <div className="bg-surface-800 rounded-lg p-3 sm:p-4 text-left">
                    <p className="text-xs text-surface-200 mb-1">In Progress</p>
                    <p className="text-lg sm:text-xl font-bold text-yellow-400">312</p>
                  </div>
                  <div className="bg-surface-800 rounded-lg p-3 sm:p-4 text-left">
                    <p className="text-xs text-surface-200 mb-1">Team Members</p>
                    <p className="text-lg sm:text-xl font-bold text-brand-400">24</p>
                  </div>
                </div>
                <div className="bg-surface-800 rounded-lg p-4">
                  <p className="text-sm text-surface-200 mb-4 text-left">Project Progress</p>
                  <div className="flex items-end gap-2 sm:gap-3 h-24 sm:h-32">
                    <div className="flex-1 bg-brand-600/60 rounded-t h-[40%]"></div>
                    <div className="flex-1 bg-brand-600/60 rounded-t h-[65%]"></div>
                    <div className="flex-1 bg-brand-600/60 rounded-t h-[45%]"></div>
                    <div className="flex-1 bg-brand-600/60 rounded-t h-[80%]"></div>
                    <div className="flex-1 bg-brand-600/60 rounded-t h-[55%]"></div>
                    <div className="flex-1 bg-brand-600 rounded-t h-[90%]"></div>
                    <div className="flex-1 bg-brand-600/40 rounded-t h-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroStyled
