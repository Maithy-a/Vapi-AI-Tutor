import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";


export default function Page() {
  return (
    <main>
      <h1 className="text-2xl underline" >Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brain Trainer"
          topic="Cognitive Skills Development"
          subject="Psychology"
          duration={30}
          color="#bde7ff"
        />
        <CompanionCard
          id="2"
          name="Sage the Memory Mentor"
          topic="Memory Enhancement"
          subject="Psychology"
          duration={25}
          color="#ffda6b"
        />
        <CompanionCard
          id="3"
          name="Cortex the Critical Thinker"
          topic="Critical Thinking Skills"
          subject="Science"
          duration={20}
          color="#e5d0ff"
        />

      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}
