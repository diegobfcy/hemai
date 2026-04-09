export default function Logos() {
  const items = [
    'Meditech', 'Epic', 'HL7 FHIR', 'OpenEMR', 'MINSAL', 'ISO 27001',
  ]
  return (
    <section className="bg-white border-y border-[#eef1f5] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        <p className="text-xs text-[#6b7e94] uppercase tracking-widest font-medium">
          Compatible e integrable con
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {items.map(name => (
            <span key={name}
                  className="text-sm font-medium text-[#3d4f63] opacity-50 hover:opacity-80 transition-opacity tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}