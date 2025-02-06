import QuizProvider from "@/contexts/QuizContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />;
    </QuizProvider>
  );
}
