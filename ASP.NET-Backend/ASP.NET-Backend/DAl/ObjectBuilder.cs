using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.DAl
{
    public class ObjectBuilder
    {
        public static Customer CreateCustomer(SqlDataReader reader)
        {
            // Use try to check if all fields is valid
            try
            {
                var customer = new Customer
                {
                    customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                    name = reader.GetString(reader.GetOrdinal("personName")),
                    email = reader.GetString(reader.GetOrdinal("personEmail")),
                    password = reader.GetString(reader.GetOrdinal("personPassword")),
                    phone = reader.GetString(reader.GetOrdinal("number"))
                };
                return customer;
            }
            catch (Exception)
            {
                // The build failed, return a null
                return null;
            }

        }

        public static Hairdresser CreateHairDresser(SqlDataReader reader)
        {
            // Use try to check if all fields is valid
            try
            {
                var hairdresser = new Hairdresser
                {
                    hairdresserId = reader.GetInt32(reader.GetOrdinal("hairDresserId")),
                    name = reader.GetString(reader.GetOrdinal("personName")),
                    email = reader.GetString(reader.GetOrdinal("personEmail")),
                    password = reader.GetString(reader.GetOrdinal("personPassword")),
                    persontype = reader.GetString(reader.GetOrdinal("personType")),
                    position = reader.GetString(reader.GetOrdinal("position"))

                };
                return hairdresser;
            }
            catch (Exception)
            {
                // The build failed, return a null
                return null;
            }

        }

        public static Salon CreateSalon(SqlDataReader dbReader)
        {
			// Use try to check if all fields is valid
			try
			{
                var salon = new Salon
                {
                    salonId = dbReader.GetInt32(dbReader.GetOrdinal("salonId")),
                    name = dbReader.GetString(dbReader.GetOrdinal("name_")),
                    address = dbReader.GetString(dbReader.GetOrdinal("address")),
                    zipCode = dbReader.GetString(dbReader.GetOrdinal("zipcode")),
                    city = dbReader.GetString(dbReader.GetOrdinal("city")),
                    phone = dbReader.GetString(dbReader.GetOrdinal("phone")),
                    email = dbReader.GetString(dbReader.GetOrdinal("email"))
                };
                return salon;
            }
            catch (Exception)
            {
				// The build failed, return a null
				return null;
            }
        }

		public static Service CreateService(SqlDataReader dbReader)
		{
			// Use try to check if all fields is valid
			try
			{
				var service = new Service
				{
					serviceId = dbReader.GetInt32(dbReader.GetOrdinal("serviceId")),
					serviceType = dbReader.GetString(dbReader.GetOrdinal("serviceType")),
					time = dbReader.GetString(dbReader.GetOrdinal("time_")),
					price = dbReader.GetFloat(dbReader.GetOrdinal("price"))
				};
				return service;
			}
			catch (Exception)
			{
				// The build failed, return a null
				return null;
			}
		}

		public static BookingTime CreateBookingTime(SqlDataReader dbReader)
		{
			// Use try to check if all fields is valid
			try
			{
				var bookingTime = new BookingTime
				{
					bookingTimeId = dbReader.GetInt32(dbReader.GetOrdinal("bookingTimeId")),
					date = dbReader.GetString(dbReader.GetOrdinal("date_")),
					startTime = dbReader.GetString(dbReader.GetOrdinal("startTime")),
					endTime = dbReader.GetString(dbReader.GetOrdinal("endTime"))
				};
				return bookingTime;
			}
			catch (Exception)
			{
				// The build failed, return a null
				return null;
			}
		}
	}
}
