import React from 'react'
import JoinCampID from '../../components/joinCampID'
import StaticHead from '../../components/staticHead'
import './about.scss'

const About = () => {
    return (
        <div className='about'>
            <StaticHead title="About CampID"/>
            <div className='main-container'>
                <div className='aboutContent'>
                    <p>
                        n ultrices molestie magna nec semper. Maecenas velit mi, ultrices quis placerat ut, egestas facilisis mi. Proin vestibulum eu nisl non tincidunt. Fusce ut volutpat ligula, non dictum ex. Quisque libero purus, tincidunt vitae pretium et, tempor euismod elit. Integer interdum, leo ac ornare accumsan, quam erat consectetur neque, in imperdiet sem urna quis mauris. Nunc consequat venenatis blandit. Mauris ultricies ligula lacus, in mollis est sagittis ac. Donec blandit felis quis urna facilisis efficitur. Sed porttitor mollis odio tincidunt volutpat. Integer eget ligula aliquet, gravida purus ut, ultricies velit. Curabitur mattis mattis orci, a pulvinar dolor cursus a. <br /><br />

                        Nulla nec enim imperdiet, porttitor libero efficitur, molestie augue. Aliquam id dignissim nisl. Donec faucibus, sem ac molestie elementum, nibh leo vulputate lorem, et volutpat nisi sapien non velit. Praesent rutrum massa massa. Mauris ac mattis diam, eu pellentesque massa. Vestibulum blandit, est at bibendum ullamcorper, erat leo tempus dolor, id fermentum purus arcu et nunc. Aenean et nisi erat. Morbi non arcu massa. Sed leo tellus, fermentum eget commodo et, vehicula id eros. Nam lacinia a mi at elementum. Cras vel faucibus nulla. Morbi at ultrices libero, vel viverra neque. Nam urna odio, varius vitae aliquet ac, placerat blandit ipsum. Duis nec lacus id orci pulvinar accumsan. Vestibulum mollis finibus orci, nec lacinia ex consequat ut. Suspendisse eleifend, enim in fermentum pharetra, ex augue feugiat dui, a porta ipsum lectus aliquam odio. <br /><br />

                        Nulla in viverra mauris. In id orci urna. Pellentesque ut lacus velit. Donec turpis metus, volutpat a vehicula quis, feugiat sit amet leo. Sed ullamcorper leo non malesuada gravida. Cras posuere orci a ex vestibulum auctor. Aliquam in massa ac tellus mollis facilisis. Vestibulum vitae lobortis turpis, nec ultrices tortor. Fusce tristique rhoncus velit ut pretium. Etiam rutrum suscipit elit. Proin blandit velit vel quam porta imperdiet. <br /><br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare dui leo, sit amet cursus ex auctor in. Ut tincidunt erat vel turpis bibendum pellentesque. Quisque ultrices eu nisi quis tempor. Sed a tempus enim. Pellentesque a velit vitae erat tincidunt aliquam non ac dolor. Ut nec dapibus elit. Nulla sed dolor felis. Sed eleifend, tellus nec malesuada viverra, sapien urna lobortis purus, vitae ullamcorper turpis ex sit amet erat. <br /><br />

                        In ultrices molestie magna nec semper. Maecenas velit mi, ultrices quis placerat ut, egestas facilisis mi. Proin vestibulum eu nisl non tincidunt. Fusce ut volutpat ligula, non dictum ex. Quisque libero purus, tincidunt vitae pretium et, tempor euismod elit. Integer interdum, leo ac ornare accumsan, quam erat consectetur neque, in imperdiet sem urna quis mauris. Nunc consequat venenatis blandit. Mauris ultricies ligula lacus, in mollis est sagittis ac. Donec blandit felis quis urna facilisis efficitur. Sed porttitor mollis odio tincidunt volutpat. Integer eget ligula aliquet, gravida purus ut, ultricies velit. Curabitur mattis mattis orci, a pulvinar dolor cursus a. <br /><br />

                        Nulla nec enim imperdiet, porttitor libero efficitur, molestie augue. Aliquam id dignissim nisl. Donec faucibus, sem ac molestie elementum, nibh leo vulputate lorem, et volutpat nisi sapien non velit. Praesent rutrum massa massa. Mauris ac mattis diam, eu pellentesque massa. Vestibulum blandit, est at bibendum ullamcorper. <br />
                    </p>
                </div>
            </div>
            <div className='joinCampIdComponent'>
                <JoinCampID />
            </div>

        </div>
    )
}

export default About