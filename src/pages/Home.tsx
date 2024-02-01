import React, { useEffect, useState } from "react";
import { fetchData } from "../Redux/searchSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

import Category from "../Components/Category";
import Card from "../Components/Card";
import style from "../css/Home.module.css";
export default function Home() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.searchSlice);
    const newData = data.map(({ recipe }: any) => recipe);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <div>
            <div className={style.info}>
                <h1 className={style.title}>Low-Calorie Recipes</h1>
                <h2 className={style.desc}>
                    Low-calorie recipes to keep you full and happy sticking to
                    your diet. <br /> Learn about volume eating and enjoy
                    delicious low-calorie meals, including satisfying snacks and
                    desserts.
                </h2>
            </div>
            <Category></Category>

            {/* {data.map(({ recipe }: any) => (
                <div>
                    <h3>{recipe.label}</h3>
                    <img src={recipe.image} alt='img'></img>
                    <p>Calories: {Math.round(recipe.calories)}</p>
                    <p>The weight of the dish: {Math.round(recipe.totalWeight)} g</p>
                    <p>Cooking time: {recipe.totalTime} m</p>
                </div>
            ))} */}
            <div className={style.card_section}>
                <h3 className={style.card_title}>Random recipes: </h3>
                <button onClick={() => dispatch(fetchData())}>Random</button>
                <div className={style.card_wrapper}>
                    {data.map(({ recipe }: any) => (
                        <Card {...recipe}></Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
