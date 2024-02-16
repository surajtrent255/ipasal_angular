export class BillingAddress {

  billingId: number = 0;
  email: string = '';
  street: string = '';
  city: string = '';
  state: number = 0;
  addedDate: Date = new Date;
  zipCode: number = 0;
  userId: number = 0;
  phone: number = 0;


  // private int billingId;
  // @Email(message = "Must be valid email address!")
  // private String email;
  // @NotBlank(message = "Must provide the street address!")
  // @Max(value = 120, message = "Max 120 characterare allowed!")
  // private String street;
  // @NotBlank(message = "Must provide city name!")
  // @Max(value = 50, message = "Max 50 characters are allowed!")
  // private String city;
  // @NotNull(message = "Must provide state id!")
  // @Max(value = 1, message = "Max one number allowed!")
  // private int state;
  // private Date addedDate;
  // private int zipcode;
  // private int userId;
  // private double phone;
}
