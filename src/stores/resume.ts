import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', () => {
  // state
  const visitorCount = ref(0)
  const styles = ref({
    color: '',
    fontFamily: '',
    loadingScreen: {
      imageUrl: '',
      text: ''
    }
  })
  const header = ref({})
  const summary = ref()
  const experience = ref([])
  const honors = ref({})
  const presentation = ref([])
  const writing = ref([])
  const committee = ref([])
  const skills = ref([])
  const education = ref([])
  const extracurricular = ref([])

  // getters
  const getVisitorCount = computed(() => visitorCount.value)
  const getStyles = computed(() => styles.value)
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
  async function setStylesData(path: string) {
    try {
      const res = await fetch(path)
      const data = await res.json()

      if (data) {
        styles.value.color = data.color
        styles.value.fontFamily = data.fontFamily
        styles.value.loadingScreen.imageUrl = data.loadingScreen.imageUrl
        styles.value.loadingScreen.text = data.loadingScreen.text
      } else {
        throw new Error('Invalid response format')
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function setResumeData(path: string) {
    try {
      const res = await fetch(path)
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

    setStylesData,
    setResumeData,
    setVisitorCount,
    updateVisitorCount
  }
})
