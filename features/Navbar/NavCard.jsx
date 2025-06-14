import { cn } from '@/lib/utils'

function NavCard({ text, hoverValue, rightOffset, hiddenTranslateX, showTranslateX }) {
  return (
    <>
      <p
        className={cn(`-z-50 absolute ${rightOffset} inset-y-0 my-auto w-fit px-2 p-1 h-fit text-end ${hiddenTranslateX} border border-gray-400 rounded-md bg-background text-sm transition-all duration-500 ease-in-out scale-95 opacity-0 `, {
          'translate-x-0 scale-100 opacity-100': hoverValue && showTranslateX === 'sm',
          'translate-x-3 scale-100 opacity-100': hoverValue && showTranslateX === 'md',
          // 'translate-x-[0.79rem] scale-100 opacity-100 ': hoverValue && showTranslateX === 'md',
          'translate-x-2 scale-100 opacity-100': hoverValue && showTranslateX === 'lg',
        })}
      >
        {text}
      </p>
    </>
  )
}

export default NavCard
