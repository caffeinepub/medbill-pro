import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

actor {
  type Contact = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    message : Text;
    timestamp : Int;
  };

  module Contact {
    public func compare(contact1 : Contact, contact2 : Contact) : Order.Order {
      Text.compare(contact1.id, contact2.id);
    };
  };

  type Admin = Principal;

  let admin : Admin = Principal.fromText("2vxsx-fae");

  let contacts = Map.empty<Text, Contact>();

  func requireAdmin(caller : Principal) {
    if (caller != admin) {
      Runtime.trap("Only admin is authorized to access this function");
    };
  };

  public shared ({ caller }) func submitContact(contact : Contact) : async () {
    contacts.add(
      contact.id,
      { contact with timestamp = 0 },
    );
  };

  public shared ({ caller }) func getAllContacts() : async [Contact] {
    requireAdmin(caller);
    contacts.values().toArray().sort();
  };

  public shared ({ caller }) func deleteContact(id : Text) : async () {
    requireAdmin(caller);
    contacts.remove(id);
  };
};
