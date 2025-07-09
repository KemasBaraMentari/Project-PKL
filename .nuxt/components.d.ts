
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppNavbar': typeof import("../components/AppNavbar.vue")['default']
    'ContactAndAddress': typeof import("../components/ContactAndAddress.vue")['default']
    'FooterPage': typeof import("../components/FooterPage.vue")['default']
    'Gallery': typeof import("../components/Gallery.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'MainContainer': typeof import("../components/MainContainer.vue")['default']
    'Profile': typeof import("../components/Profile.vue")['default']
    'Schedule': typeof import("../components/Schedule.vue")['default']
    'SectionGridLayanan': typeof import("../components/SectionGridLayanan.vue")['default']
    'SectionGridMain': typeof import("../components/SectionGridMain.vue")['default']
    'SectionGridSchedule': typeof import("../components/SectionGridSchedule.vue")['default']
    'SectionLayanan': typeof import("../components/SectionLayanan.vue")['default']
    'SectionMain': typeof import("../components/SectionMain.vue")['default']
    'SectionSchedule': typeof import("../components/SectionSchedule.vue")['default']
    'Service': typeof import("../components/Service.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'VDatePicker': typeof import("v-calendar")['DatePicker']
    'VCalendar': typeof import("v-calendar")['Calendar']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppNavbar': LazyComponent<typeof import("../components/AppNavbar.vue")['default']>
    'LazyContactAndAddress': LazyComponent<typeof import("../components/ContactAndAddress.vue")['default']>
    'LazyFooterPage': LazyComponent<typeof import("../components/FooterPage.vue")['default']>
    'LazyGallery': LazyComponent<typeof import("../components/Gallery.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../components/HeroSection.vue")['default']>
    'LazyMainContainer': LazyComponent<typeof import("../components/MainContainer.vue")['default']>
    'LazyProfile': LazyComponent<typeof import("../components/Profile.vue")['default']>
    'LazySchedule': LazyComponent<typeof import("../components/Schedule.vue")['default']>
    'LazySectionGridLayanan': LazyComponent<typeof import("../components/SectionGridLayanan.vue")['default']>
    'LazySectionGridMain': LazyComponent<typeof import("../components/SectionGridMain.vue")['default']>
    'LazySectionGridSchedule': LazyComponent<typeof import("../components/SectionGridSchedule.vue")['default']>
    'LazySectionLayanan': LazyComponent<typeof import("../components/SectionLayanan.vue")['default']>
    'LazySectionMain': LazyComponent<typeof import("../components/SectionMain.vue")['default']>
    'LazySectionSchedule': LazyComponent<typeof import("../components/SectionSchedule.vue")['default']>
    'LazyService': LazyComponent<typeof import("../components/Service.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyVDatePicker': LazyComponent<typeof import("v-calendar")['DatePicker']>
    'LazyVCalendar': LazyComponent<typeof import("v-calendar")['Calendar']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppNavbar: typeof import("../components/AppNavbar.vue")['default']
export const ContactAndAddress: typeof import("../components/ContactAndAddress.vue")['default']
export const FooterPage: typeof import("../components/FooterPage.vue")['default']
export const Gallery: typeof import("../components/Gallery.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const MainContainer: typeof import("../components/MainContainer.vue")['default']
export const Profile: typeof import("../components/Profile.vue")['default']
export const Schedule: typeof import("../components/Schedule.vue")['default']
export const SectionGridLayanan: typeof import("../components/SectionGridLayanan.vue")['default']
export const SectionGridMain: typeof import("../components/SectionGridMain.vue")['default']
export const SectionGridSchedule: typeof import("../components/SectionGridSchedule.vue")['default']
export const SectionLayanan: typeof import("../components/SectionLayanan.vue")['default']
export const SectionMain: typeof import("../components/SectionMain.vue")['default']
export const SectionSchedule: typeof import("../components/SectionSchedule.vue")['default']
export const Service: typeof import("../components/Service.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const VDatePicker: typeof import("v-calendar")['DatePicker']
export const VCalendar: typeof import("v-calendar")['Calendar']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppNavbar: LazyComponent<typeof import("../components/AppNavbar.vue")['default']>
export const LazyContactAndAddress: LazyComponent<typeof import("../components/ContactAndAddress.vue")['default']>
export const LazyFooterPage: LazyComponent<typeof import("../components/FooterPage.vue")['default']>
export const LazyGallery: LazyComponent<typeof import("../components/Gallery.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyMainContainer: LazyComponent<typeof import("../components/MainContainer.vue")['default']>
export const LazyProfile: LazyComponent<typeof import("../components/Profile.vue")['default']>
export const LazySchedule: LazyComponent<typeof import("../components/Schedule.vue")['default']>
export const LazySectionGridLayanan: LazyComponent<typeof import("../components/SectionGridLayanan.vue")['default']>
export const LazySectionGridMain: LazyComponent<typeof import("../components/SectionGridMain.vue")['default']>
export const LazySectionGridSchedule: LazyComponent<typeof import("../components/SectionGridSchedule.vue")['default']>
export const LazySectionLayanan: LazyComponent<typeof import("../components/SectionLayanan.vue")['default']>
export const LazySectionMain: LazyComponent<typeof import("../components/SectionMain.vue")['default']>
export const LazySectionSchedule: LazyComponent<typeof import("../components/SectionSchedule.vue")['default']>
export const LazyService: LazyComponent<typeof import("../components/Service.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyVDatePicker: LazyComponent<typeof import("v-calendar")['DatePicker']>
export const LazyVCalendar: LazyComponent<typeof import("v-calendar")['Calendar']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
