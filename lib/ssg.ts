import {GetStaticProps} from "next";
import {createClient} from "@supabase/supabase-js";
import {LayoutProps} from "../components/layout";

export const getArticleProps = async (path: string): Promise<ReturnType<GetStaticProps<LayoutProps>>> => {
    const supabase = createClient(
        <string>process.env.SUPABASE_URL,
        <string>process.env.SUPABASE_ANON_KEY
    )

    const {data, error} = await supabase
        .from<LayoutProps>('article')
        .select('*')
        .eq('path', path)
        .single();

    if (error || !data) {
        return {
            notFound: true,
        }
    }

    return {
        props: data
    }
}