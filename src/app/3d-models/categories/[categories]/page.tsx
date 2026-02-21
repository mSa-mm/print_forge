import { getDisplayNameFromSlug } from "@/app/lib/categories"
import type { CategoriePageProps } from "@/app/types"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoriesPage({ params }: CategoriePageProps) {
    const {categories} = await params
    const category = getCategoryBySlug(categories)
    console.log(category)
    return <h1>{categories}</h1>
}