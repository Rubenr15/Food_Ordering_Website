import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <Head>
        <title>Zinger | About</title>
      </Head>
      <div className="heightFix px-6">
        <div className="max-w-screen-xl mx-auto md:py-20 py-12 pb-20">
          <div className="xl:text-lg text-base   font-medium">
            <h3 className="sm:text-2xl text-xl font-semibold border-b-2 border-gray-200 pb-4 text-gray-700">
              About
            </h3>
            <div className="flex md:gap-8 md:flex-row flex-col w-full items-center">
              <div className="mx-auto md:w-3/4 md:max-w-lg  max-w-xs">
                <Image
                  src="/img/programming.svg"
                  width={400}
                  height={400}
                  alt=""
                  objectFit="contain"
                />
              </div>
              <div className="flex-grow ml-auto ">
                <Fade bottom>
                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
