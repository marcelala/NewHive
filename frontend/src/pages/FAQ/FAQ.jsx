import FaqCard from "./FaqCard";
import Information from "../../data/faq.json";

export default function FAQ () {
    // Components
  const FaqCardsArray = Information.map((item) => (
    <FaqCard key={item.id} information={item} />
  ));

    return (
        <div className="faq-page">
            {/* Content with cards */}
            <h1>FAQ about Sweden in videos</h1>
            <h2>Here you can find interesting videos about Sweden that we picked for you who is new to Sweden!</h2>
            <div className="faq-array">{FaqCardsArray}</div>
        </div>
    )
}