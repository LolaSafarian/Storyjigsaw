import type { AppSettings } from '../types';
import BackIcon from './icons/BackIcon';
interface SettingsScreenProps {
    settings: AppSettings;
    onUpdate: (settings: Partial<AppSettings>) => void;
    onBack: () => void;
    onAbout: () => void;
}
export default function SettingsScreen({ settings, onUpdate, onBack, onAbout }: SettingsScreenProps) {
    return (<div className="min-h-screen min-h-dvh flex flex-col" data-spec-id="j9kPunP4ibauOSNd">
      {}
      <header className="flex items-center px-4 py-4 border-b border-warm-300" data-spec-id="qcGrgBdggURXE5fz">
        <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-warm-200 transition-colors" aria-label="Back" data-spec-id="azJMO2X0MBAhVL3V">
          <BackIcon className="w-6 h-6 text-ink-light" data-spec-id="P75aFHugbw3fC8Yp"/>
        </button>
        <h1 className="font-sans font-semibold text-lg text-ink ml-2" data-spec-id="IzR1JpBUEbXQx2Xg">
          Settings
        </h1>
      </header>

      {}
      <main className="flex-1 px-4 py-6 overflow-y-auto" data-spec-id="fGIkGQ1MqbZzwgp0">
        <div className="max-w-md mx-auto space-y-8" data-spec-id="7rK8FnrXenRsfJGO">
          {}
          <section data-spec-id="QhR8DiGcviXsxRnc">
            <h2 className="font-sans font-medium text-ink mb-4" data-spec-id="YQXaty2qj2GTq2xt">Text Size</h2>
            <div className="space-y-2" data-spec-id="k47mMpXTaiDcvond">
              {([
        'default',
        'large',
        'xl'
    ] as const).map((size)=>(<button key={size} onClick={()=>onUpdate({
                textSize: size
            })} className={`w-full p-4 rounded-xl border text-left font-sans transition-colors ${settings.textSize === size ? 'border-accent bg-accent-light' : 'border-warm-300 bg-white hover:bg-warm-100'}`} aria-pressed={settings.textSize === size} data-spec-id="WYwngNuB4Y9InX7Z">
                  <span className={`block ${size === 'xl' ? 'text-xl' : size === 'large' ? 'text-lg' : 'text-base'}`} data-spec-id="IjVA4cyJmqN8UOQO">
                    {size === 'default' ? 'Default' : size === 'large' ? 'Large' : 'Extra Large'}
                  </span>
                  <span className={`block text-ink-muted mt-1 ${size === 'xl' ? 'text-lg' : size === 'large' ? 'text-base' : 'text-sm'}`} data-spec-id="G4BfzFJzhykV78sH">
                    Sample story text
                  </span>
                </button>))}
            </div>
          </section>

          {}
          <section data-spec-id="55axZc9Uh0p4no6a">
            <h2 className="font-sans font-medium text-ink mb-4" data-spec-id="a2cXGM2JA3hmwBhn">Accessibility</h2>
            <div className="space-y-3" data-spec-id="1sFB3xKHJXEwCNxD">
              {}
              <label className="flex items-center justify-between p-4 bg-white rounded-xl border border-warm-300 cursor-pointer" data-spec-id="kr65l2TM4YyG9FvL">
                <div data-spec-id="V6iyPqrAiGMpfc5m">
                  <span className="block font-sans text-ink" data-spec-id="CMqvBMbkLmLylAme">Reduce Motion</span>
                  <span className="block text-sm text-ink-muted" data-spec-id="27zzfjDTY4CaaGwg">
                    Minimize animations
                  </span>
                </div>
                <div className="relative" data-spec-id="q6HducTLdpiG1gzp">
                  <input type="checkbox" checked={settings.reduceMotion} onChange={(e)=>onUpdate({
            reduceMotion: e.target.checked
        })} className="sr-only peer" data-spec-id="YNVVhDlMGG77DOfO"/>
                  <div className="w-12 h-7 bg-warm-400 rounded-full peer-checked:bg-accent transition-colors" data-spec-id="gi0ZtWfHpjVVOhMc"/>
                  <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" data-spec-id="67t5TGnFZEnzGgqA"/>
                </div>
              </label>

              {}
              <label className="flex items-center justify-between p-4 bg-white rounded-xl border border-warm-300 cursor-pointer" data-spec-id="rCYyvQlCFluMUsFd">
                <div data-spec-id="fMaZ6g5qEJDA1cAa">
                  <span className="block font-sans text-ink" data-spec-id="Kmrw9LQtuNDpaloa">High Contrast</span>
                  <span className="block text-sm text-ink-muted" data-spec-id="3iMRjJJAh3tCljM9">
                    Increase text contrast
                  </span>
                </div>
                <div className="relative" data-spec-id="YioBA2zsSpVOe1ek">
                  <input type="checkbox" checked={settings.highContrast} onChange={(e)=>onUpdate({
            highContrast: e.target.checked
        })} className="sr-only peer" data-spec-id="guwbfpUYBBTQgzyc"/>
                  <div className="w-12 h-7 bg-warm-400 rounded-full peer-checked:bg-accent transition-colors" data-spec-id="1oU3zdEshebNvj3r"/>
                  <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" data-spec-id="cnPAmMZilYdKC50i"/>
                </div>
              </label>
            </div>
          </section>

          {}
          <section className="space-y-3" data-spec-id="ygbXSdMr3XiuV2WJ">
            <button onClick={onAbout} className="w-full p-4 bg-white rounded-xl border border-warm-300 text-left font-sans text-ink hover:bg-warm-100 transition-colors" data-spec-id="iRNMj8EAXbpPQdW3">
              About & Privacy
            </button>
            
            <a href="#waitlist" className="block w-full p-4 bg-white rounded-xl border border-warm-300 text-left font-sans text-ink hover:bg-warm-100 transition-colors" data-spec-id="IQyrpRPEGF57x7Kv">
              Join the Waitlist
            </a>
          </section>

          {}
          <p className="text-center text-ink-muted text-sm font-sans" data-spec-id="j9M6dUYZFT9M5MiC">
            Story Jigsaw v1.0.0
          </p>
        </div>
      </main>
    </div>);
}
