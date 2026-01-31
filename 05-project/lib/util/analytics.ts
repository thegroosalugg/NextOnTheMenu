import { fetchData } from "./fetch_data"

export async function postAnalytics() {
  const url = process.env.NEXT_PUBLIC_ANALYTICS_URL
  if (!url) return

  const localData = localStorage.getItem('analytics')

  if (localData) {
    const savedData = JSON.parse(localData)
    const isLessThan24Hrs = Date.now() - new Date(savedData).getTime() < 24 * 60 * 60 * 1000
    if (isLessThan24Hrs) return
  }

  const { width, height } = window.screen
  if (!width || !height) return

  const date = new Date().toISOString()

  try {
    await fetchData({
          url,
       method: 'POST',
      headers: { ['x-analytics']: 'true' },
      data: {
             date,
              url: location.href,
           screen: { width, height },
        userAgent: navigator.userAgent,
      },
    })

    localStorage.setItem('analytics', JSON.stringify(date))
  } catch (error) {
    console.log(error)
  }
}
