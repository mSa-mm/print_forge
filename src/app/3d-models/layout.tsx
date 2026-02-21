import { getAllCategories } from "../lib/categories";
import type { ModelLayoutProps } from "../types";
import type { Category } from "../types";
import Link from "next/link";

export default function ModelLayout({ children }: ModelLayoutProps) {
    const categories = getAllCategories()
    const categoryMap = categories.map((cat: Category) => {
        return (
            <Link key={cat.slug} href={`/3d-models/categories/${cat.slug}`}>
                {cat.displayName}
            </Link>
        )
    })

    return (
        <nav>
            {categoryMap}
            {children}
        </nav>
    )
}