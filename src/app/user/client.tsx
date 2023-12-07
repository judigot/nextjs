"use client";

interface Props {
  data: string;
}

export default function Client({ data }: Props) {
  return <main>{JSON.stringify(data)}</main>;
}
