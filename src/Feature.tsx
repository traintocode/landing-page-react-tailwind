const Feature: React.FC<{ name: string, description: string, children: JSX.Element }> = props => {
    return <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white sm:shrink-0">
        {props.children}
      </div>
      <div className="sm:min-w-0 sm:flex-1">
        <p className="text-lg font-semibold leading-8 text-gray-900">{props.name}</p>
        <p className="mt-2 text-base leading-7 text-gray-600">{props.description}</p>
      </div>
    </div>
  }

  export default Feature;