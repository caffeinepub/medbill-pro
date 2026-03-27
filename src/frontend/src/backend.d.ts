import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    id: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    deleteContact(id: string): Promise<void>;
    getAllContacts(): Promise<Array<Contact>>;
    submitContact(contact: Contact): Promise<void>;
}
