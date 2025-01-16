'use client'
import { ScaleLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50">
    <ScaleLoader color="#05eb3e" />
  </div>
  )
}
