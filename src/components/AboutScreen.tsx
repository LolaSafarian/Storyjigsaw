import BackIcon from './icons/BackIcon';
interface AboutScreenProps {
    onBack: () => void;
}
export default function AboutScreen({ onBack }: AboutScreenProps) {
    return (<div className="min-h-screen min-h-dvh flex flex-col" data-spec-id="jwvyiWLag4iySDOt">
      {}
      <header className="flex items-center px-4 py-4 border-b border-warm-300" data-spec-id="HRwcmunimViu5gF6">
        <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-warm-200 transition-colors" aria-label="Back" data-spec-id="E5twluoYlapg19Iv">
          <BackIcon className="w-6 h-6 text-ink-light" data-spec-id="gdDfpyjkxdafDY7i"/>
        </button>
        <h1 className="font-sans font-semibold text-lg text-ink ml-2" data-spec-id="d5BY63M69TyxUS0p">
          About
        </h1>
      </header>

      {}
      <main className="flex-1 px-4 py-6 overflow-y-auto" data-spec-id="Akqx8s2d2hS8AvXk">
        <div className="max-w-md mx-auto space-y-8" data-spec-id="7AlfvvuqoMppEQLT">
          {}
          <section className="space-y-4" data-spec-id="YmB3cSQsPuAXibm6">
            <h2 className="font-sans font-semibold text-xl text-ink" data-spec-id="9bGexLDGLwLgiDNI">
              Story Jigsaw
            </h2>
            <p className="font-serif text-ink leading-relaxed" data-spec-id="W7HiNHMDBuvBZLQQ">
              A once-a-day puzzle where you piece a short story back together. 
              No timer. No trivia. Just meaning.
            </p>
            <p className="font-serif text-ink-light leading-relaxed" data-spec-id="FOjZb8JZMCH1rU6X">
              Each day, everyone gets the same story. The pieces are mixed up. 
              Read carefully. Move the lines. Find the order that makes sense.
            </p>
          </section>

          {}
          <section className="space-y-4" data-spec-id="4dKtR2MsBYDRCN1S">
            <h2 className="font-sans font-semibold text-lg text-ink" data-spec-id="bGzF2uE72CbUAzD9">
              How to Play
            </h2>
            <ol className="list-decimal list-inside space-y-2 font-serif text-ink leading-relaxed" data-spec-id="86cnmK8in2h1Rnsh">
              <li data-spec-id="uyfvzJldGCMr5LDL">Read the story fragments carefully.</li>
              <li data-spec-id="IhNWlPxgNOG8f0RR">Drag the lines into the order that makes sense.</li>
              <li data-spec-id="upgdsjEKDEnvucWq">Tap Check when you're ready.</li>
              <li data-spec-id="2DIPhk2ppo0BTT9O">If you're not quite right, you get one more try.</li>
            </ol>
          </section>

          {}
          <section className="space-y-4" data-spec-id="1h8aF3Upw1Of1Eay">
            <h2 className="font-sans font-semibold text-lg text-ink" data-spec-id="9KuRsrYxIIzlOIVj">
              Privacy
            </h2>
            <p className="font-serif text-ink leading-relaxed" data-spec-id="2Mn8WdPXQGjgDwgx">
              Story Jigsaw respects your privacy. We don't collect personal data, 
              track your activity, or require an account.
            </p>
            <p className="font-serif text-ink-light leading-relaxed" data-spec-id="bLxVxAjJsYIkKrgr">
              All your progress is stored locally on your device. 
              When you share your results, only your score grid is shared — 
              never any story text.
            </p>
          </section>

          {}
          <section className="space-y-4" data-spec-id="yDMSa5ggvqYr0bwk">
            <h2 className="font-sans font-semibold text-lg text-ink" data-spec-id="YxeHdzTFta8iN9Ez">
              Credits
            </h2>
            <p className="font-serif text-ink-light leading-relaxed" data-spec-id="oF7bYCSe2SbYS3bh">
              Stories crafted with care. Built with love.
            </p>
          </section>

          {}
          <section className="space-y-4 pb-8" data-spec-id="6GVlttBATTML2EUQ">
            <h2 className="font-sans font-semibold text-lg text-ink" data-spec-id="eeAQrKUxz6eDVXLJ">
              Contact
            </h2>
            <p className="font-serif text-ink-light leading-relaxed" data-spec-id="iQpMexq7QLQkYsSC">
              Questions or feedback? We'd love to hear from you.
            </p>
            <a href="mailto:hello@storyjigsaw.com" className="inline-block text-accent font-sans underline hover:no-underline" data-spec-id="WBxN1F8TDb5b5FZg">
              hello@storyjigsaw.com
            </a>
          </section>
        </div>
      </main>
    </div>);
}
