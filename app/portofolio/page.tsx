import Portofolio from '@/component/Portofolio'

export default function PortofolioPage() {
  return (
    <div className="w-screen min-h-screen bg-neutral-100">
      <Portofolio />
      <div className="text-3xl text-center italic font-semibold tracking-wider pt-32 text-neutral-300">
        Under Constructions...
      </div>
      <div className="lg:fixed lg:bottom-0 lg:left-0 w-screen text-center text-xs p-4">
        Tech stack logo by{' '}
        <a
          href="https://brandeps.com/"
          target="_blank"
          className="transition-all text-primary hover:text-current"
        >
          https://brandeps.com
        </a>
      </div>
    </div>
  )
}
