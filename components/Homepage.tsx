import Image from 'next/image'
import Link from 'next/link'
interface MyComponentProps {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function MyComponent({ backgroundImage, title, description, buttonText }: MyComponentProps) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="max-w-md py-20 px-6 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {/* Description */}
        <p className="text-gray-700 text-base mb-8">{description}</p>
        {/* Buttons */}
        <div className="flex justify-between">
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all" >
            <Link href="./BookAService">{buttonText}</Link>
            
            </button>
          <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"><Link href="./BookAService">{buttonText}</Link></button>
        </div>
      </div>
    </div>
  )
}
