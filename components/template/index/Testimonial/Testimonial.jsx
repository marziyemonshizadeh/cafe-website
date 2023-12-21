import Comment from "@/components/modules/Comment/Comment";
import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";

export default function Testimonial() {
  return (
    <>
      <SectionTitle title="TESTIMONIAL" />
      <header className="text-center text-orange-950 text-4xl font-bold">
        Our Clients Say
      </header>
      <section className="mx-16">
        <Comment img="https://s42013.pcdn.co/wp-content/uploads/2016/07/Kenny-Lange-PHNX21Design-Client-Report.jpg" />
        <Comment img="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" />
        <Comment img="https://www.daypitney.com/wp-content/uploads/Ferrera_Sandra_WEBLanding_QB_326x258px.jpg" />
        <Comment img="https://www.daypitney.com/wp-content/uploads/Brunau_Andraya_WEBLanding_QB_326x258px.jpg" />
        <Comment img="https://media.licdn.com/dms/image/D4E03AQEJ5N0spISZaA/profile-displayphoto-shrink_200_200/0/1700074754447?e=2147483647&v=beta&t=ZUhBvGsk1qkOybUPWicmLjNEx-3rUpvrjlgku8s3HuU" />
      </section>
    </>
  );
}
