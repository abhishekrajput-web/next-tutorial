import style from "./service.module.css";


export const metaData = {
  title:"services page",
  description:"servi e page is here",
  keywords:"html,css,javscript",
  author:[{name:"abhishek", url:"abhsihekrajput.com"}, {name:"akash"}]
}
const Services = () => {

  return (
    <div>
        <h2 className={style.common_heading}>services</h2>
    </div>
  )
}

export default Services;
