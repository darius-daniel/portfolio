import Blur from './blur';
import CodeBlock from './codeblock';
import { RiArrowRightSLine } from '@remixicon/react';
import { fira_code } from '../lib/fonts';
import { snippet1, snippet2 } from '../lib/snippets';

export default function Hero() {
  return (
    <main className="flex-auto lg:px-10 lg:flex lg:flex-row lg:justify-center">
      <span className="lg:hidden">
        <Blur />
      </span>
      <div className="px-8 mt-20 lg:px-4 lg:py-[84px] w-full lg:w-1/2 lg:min-w-fit font-medium">
        <p className="text-[18px] max-lg:mb-24 lg:tracking-tighter">
          Hi all. I am
        </p>
        <p className="flex flex-row text-accent-2 text-[20px] items-center lg:hidden">
          <RiArrowRightSLine /> Front-end Developer
        </p>
        <p className="max-lg:ms-6 text-[62px] font-normal leading-none max-lg:mb-28 lg:min-w-fit lg:tracking-tighter">
          Darius
          <br />
          Daniel
        </p>
        <p className="max-lg:hidden flex flex-row text-secondary-3 text-[20px] items-center mb-16 tracking-tighter">
          <RiArrowRightSLine /> Front-end Developer
        </p>
        <p className="text-secondary-1 mb-4 text-[14px]">
          {'// Find my profile on Github:'}
        </p>
        <code className={`text-[14px] ${fira_code.className}`}>
          {' '}
          <span className="text-secondary-3">const</span>{' '}
          <span className="text-accent-2">githubLink</span> ={' '}
          <span className="text-accent-3">
            {'https://github.com//darius-daniel/'}{' '}
          </span>
        </code>
      </div>
      <span className="max-lg:hidden">
        <Blur />
      </span>
      <div className="hidden lg:visible lg:flex flex-col gap-6 py-8">
        <CodeBlock code={snippet1.code} language="typescript" />
        <CodeBlock code={snippet2.code} language="typescript" />
      </div>
    </main>
  );
}
