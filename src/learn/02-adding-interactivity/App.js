import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <Allposts />      
    </Section>
  );
}

function Allposts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <Recentposts />      
    </Section>
  );
}

function Recentposts() {
  return (
   <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"      
      />    
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"      
      />   
   </Section>

  );
}

function Post({title,body}) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}