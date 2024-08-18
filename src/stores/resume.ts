import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { get } from 'http'

export const useResumeStore = defineStore('resume', () => {
  // state
  const visitorCounterEnabled = ref<boolean>()
  const visitorCount = ref(0)
  const styles = ref({
    color: '',
    fontFamily: '',
    loadingScreen: {
      imageUrl: '',
      text: ''
    }
  })
  const resumeLoading = ref(true)
  const header = ref({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phone: '',
    homepage: '',
    socials: [
      {
        name: '',
        url: ''
      }
    ],
    quote: ''
  })
  const summary = ref()
  const experience = ref([])
  const honors = ref({
    international: [],
    domestic: []
  })
  const presentation = ref([])
  const writing = ref([])
  const committee = ref([])
  const skills = ref([])
  const education = ref([])
  const extracurricular = ref([])

  // getters
  const getVisitorCounterEnabled = computed(() => visitorCounterEnabled.value)
  const getVisitorCount = computed(() => visitorCount.value)
  const getStyles = computed(() => styles.value)
  const getResumeLoading = computed(() => resumeLoading.value)
  const getHeader = computed(() => header.value)
  const getSummary = computed(() => summary.value)
  const getExperience = computed(() => experience.value)
  const getHonors = computed(() => honors.value)
  const getPresentations = computed(() => presentation.value)
  const getWriting = computed(() => writing.value)
  const getCommittees = computed(() => committee.value)
  const getSkills = computed(() => skills.value)
  const getEducation = computed(() => education.value)
  const getExtracurricular = computed(() => extracurricular.value)

  // actions

  async function setVisitorCounterEnabled(enable: boolean) {
    visitorCounterEnabled.value = enable
  }

  async function setStylesData(path: string) {
    const baseUrl = import.meta.env.BASE_URL || '/'
    try {
      const res = await fetch(`${baseUrl}${path}`)
      const data = await res.json()

      if (data) {
        styles.value.color = data.color
        styles.value.fontFamily = data.fontFamily
        styles.value.loadingScreen.imageUrl = `${baseUrl}${data.loadingScreen.imageUrl}`
        styles.value.loadingScreen.text = data.loadingScreen.text
        setResumeLoading()
      } else {
        throw new Error('Invalid response format')
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function setResumeLoading() {
    resumeLoading.value = !resumeLoading.value
  }

  async function setResumeData(path: string) {
    const baseUrl = import.meta.env.BASE_URL || '/'
    try {
      const res = await fetch(`${baseUrl}${path}`)
      const data = await res.json()

      if (data) {
        header.value = data.header
        summary.value = data.summary
        experience.value = data.experience
        honors.value = data.honors
        presentation.value = data.presentation
        writing.value = data.writing
        committee.value = data.committee
        skills.value = data.skills
        education.value = data.education
        extracurricular.value = data.extracurricular
      } else {
        throw new Error('Invalid response format')
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function setVisitorCount() {
    try {
      const res = await fetch(process.env.VUE_APP_SET_VISITOR_COUNT_API || '')

      const data = await res.json()
      if (data.body && typeof data.body.views === 'number') {
        visitorCount.value = data.body.views
      } else {
        throw new Error('Invalid response format')
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function updateVisitorCount() {
    try {
      const res = await fetch(process.env.VUE_APP_INCREMENT_VISITOR_COUNT_API || '')

      const data = await res.json()
      if (data.body && typeof data.body.views === 'number') {
        visitorCount.value = data.body.views
      } else {
        throw new Error('Invalid response format')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    getResumeLoading,
    getVisitorCounterEnabled,
    getVisitorCount,
    getStyles,
    getHeader,
    getSummary,
    getExperience,
    getHonors,
    getPresentations,
    getWriting,
    getCommittees,
    getSkills,
    getEducation,
    getExtracurricular,

    setVisitorCounterEnabled,
    setStylesData,
    setResumeData,
    setVisitorCount,
    updateVisitorCount
  }
})
