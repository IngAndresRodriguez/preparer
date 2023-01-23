
interface MainTitleProps {
  title: string;
}

export const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <div className='main-title'>{title}</div>
  )
}
