import {GetStaticProps} from "next";
import {createClient} from "@supabase/supabase-js";
import {LayoutProps} from "../components/layout";

export const getArticleProps = async (path: string): Promise<ReturnType<GetStaticProps>> => {
    const supabase = createClient(
        <string>process.env.NEXT_PUBLIC_SUPABASE_URL,
        <string>process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
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