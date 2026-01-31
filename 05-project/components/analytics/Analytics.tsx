'use client'

import { postAnalytics } from '@/lib/util/analytics'
import { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    postAnalytics()
  }, [])

  return null
}
