import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

export default function AIToolsHub() {
  return (
    <MaxWidthWrapper className="mb-12 mt-12 sm:mt-40 flex flex-col items-center justify-center text-center">
      
      <div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-7xl" >AI Tools Hub</h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">Welcome to our suite of sophisticated AI tools, each designed to provide you with tailored insights and strategies for life insurance, estate planning, and wealth preservation. These tools work in harmony with our expert human advisors to offer you a comprehensive and personalized financial planning experience.</p>
      </div>
      <ul>
        <li>
          <Link href="/aitoolshub/sentinel">
          Sentinel: Life Insurance Profile AI
          </Link>
        </li>
        <li>
          <Link href="/aitoolshub/architect">
          Architect: Estate Planning Prioritization AI
          </Link>
        </li>
        <li>
          <Link href="/aitoolshub/luminary">
          Luminary: Estate Planning Strategist AI
          </Link>
        </li>
        <li>
          <Link href="/aitoolshub/cipher">
          Cipher: Estate Document Insight AI
          </Link>
        </li>
        <li>
          <Link href="/aitoolshub/policypro">
          PolicyPro: Life Insurance Policy Review AI
          </Link>
        </li>
        <li>
          <Link href="/aitoolshub/taxsmart">
          TaxSmart: Tax-Efficient Withdrawal AI
          </Link>
        </li>
        {/* Add links for other tools here */}
      </ul>
      </MaxWidthWrapper>
  );
}
// ## 1. Sentinel: Life Insurance Profile AI

 

// Sentinel analyzes your unique financial profile and preferences to recommend the most suitable type of life insurance, such as term, whole life, or universal life.

 

// - Tailored recommendations based on your needs and goals

// - Simple, sophisticated guidance on policy types

// - Personalized strategy without product-specific bias

 

// [Button: Start Your Profile Assessment]

 

// ## 2. Architect: Estate Planning Prioritization AI

 

// Architect guides you in identifying your next best estate planning actions, tailored to your age, marital status, family, and goals. It offers a quick and easy path to uncover your estate planning priorities.

 

// - Personalized action steps based on your profile

// - Simple discovery process for estate planning needs

// - Guidance aligned with your life stage and existing documents

 

// [Button: Discover Your Priorities]

 

// ## 3. Luminary: Estate Planning Strategist AI

 

// Luminary serves as your trusted estate planning partner, offering strategic insights and suggestions to help you shape your legacy. While it doesn't provide legal or tax advice, Luminary helps you explore ideas, refine your approach, and navigate complex planning scenarios.

 

// - Thought-provoking estate planning discussions

// - Personalized strategies for wealth transfer and tax planning

// - Collaborative tool to shape your long-term legacy vision

 

// [Button: Strategize Your Estate Plan]

 

// ## 4. Cipher: Estate Document Insight AI

 

// Cipher offers a seamless way to review your estate documents by summarizing key provisions and engaging in a conversational Q&A. Upload your will, trust, or healthcare directive, and Cipher will provide insights and feedback—without giving legal advice.

 

// - Quick document upload and key provision summaries

// - Interactive chat for personalized Q&A

// - Commentary and POVs on your estate planning documents

 

// [Button: Review Your Estate Documents]

 

// ## 5. PolicyPro: Life Insurance Policy Review AI

 

// PolicyPro helps you gain clarity on your life insurance policy by summarizing key details and answering your questions. Ideal for annual reviews or if you're unsure about your coverage, PolicyPro provides valuable insights without the need for complex analysis.

 

// - Quick summary of your in-force life insurance policy

// - Interactive Q&A for personalized insights

// - Perfect for policy reviews and understanding your coverage

 

// [Button: Review Your Life Insurance Policy]

 

// ## 6. TaxSmart: Tax-Efficient Withdrawal AI

 

// TaxSmart helps you develop and refine tax-smart withdrawal strategies from both qualified and non-qualified investment accounts, including inherited IRAs. Gain personalized guidance to minimize taxes and maximize your long-term financial goals.

 

// - Optimized withdrawal strategies for various account types

// - Guidance on managing inherited IRAs

// - Tax-efficient planning for long-term wealth preservation

 

// [Button: Optimize Your Withdrawal Strategy]