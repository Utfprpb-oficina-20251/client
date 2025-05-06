import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

import { ECard } from "@/components/example/ECard"
import { ECarousel } from "@/components/example/ECorousel"
import { EForm } from "@/components/example/EForm"
import { EScroll } from "@/components/example/EScroll"
import { ETabs } from "@/components/example/ETabs"
import { EDialog } from "@/components/example/EDialog"
import { EDropdown } from "@/components/example/EDropdown"
import { EBreadcrumb } from "@/components/example/EBreadcrumb"

export function TestPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1 p-4">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1>Test Page</h1>
            <div className="flex flex-col gap-4 h-fit w-fit p-16 border-2 border-black rounded items-center justify-center">

              <EBreadcrumb />

              <ECard />

              <div className="flex flex-raw border border-white rounded p-2 gap-4">
                <div>
                  <p>Test Dialog</p>
                  <EDialog />
                </div>
                <div>
                  <p>Test Dropdown</p>
                  <EDropdown />
                </div>
              </div>

              <div className="border border-white rounded p-2">
                <p>Test Carousel</p>
                <ECarousel />
              </div>

              <div className="border border-white rounded p-2">
                <EForm />
              </div>

              <EScroll />

              <ETabs />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}