import axios from 'src/utils/axios';

// ข้อมูลจำลองอ้างอิงโครงสร้างจาก QUERY 1 (vehicles_data + employee_mt + customer_data)
const MOCK_VEHICLES = [
  {
    external_vehicle_id: 101,
    VH_CODE: 'BUS-001',
    VH_REGIS_PLATE: '30-1234',
    VH_REGIS_PROVINCE: 'ชลบุรี',
    vehicle_type_name: 'รถบัสปรับอากาศ 40 ที่นั่ง',
    driver_emp_code: 'EMP012',
    driver_full_name: 'นายสมชาย ใจดี',
    driver_phone: '081-234-5678',
    driver_license_exp: '2027-05-20',
    factory_code: 'CL001',
    factory_name: 'บริษัท อมตะซิตี้ อุตสาหกรรม จำกัด',
    VH_CHECKUP_DATE: '2026-12-15',
    TAX_EXP_DATE: '2027-01-31',
    ACT_EXP_DATE: '2027-01-31',
    INRC_EXP_DATE: '2027-03-10',
  },
  {
    external_vehicle_id: 102,
    VH_CODE: 'VAN-015',
    VH_REGIS_PLATE: 'ฮฮ-5678',
    VH_REGIS_PROVINCE: 'กรุงเทพมหานคร',
    vehicle_type_name: 'รถตู้โดยสาร 13 ที่นั่ง',
    driver_emp_code: 'EMP045',
    driver_full_name: 'นายวิชัย รักงาน',
    driver_phone: '089-876-5432',
    driver_license_exp: '2026-11-30',
    factory_code: 'CL002',
    factory_name: 'บริษัท อีสเทิร์นซีบอร์ด แมนูแฟคเจอริ่ง จำกัด',
    VH_CHECKUP_DATE: '2026-11-25',
    TAX_EXP_DATE: '2026-12-05',
    ACT_EXP_DATE: '2026-12-05',
    INRC_EXP_DATE: '2027-02-15',
  }
];

export const getVehicles = async (params = {}) => {
  try {
    // เมื่อพร้อมเชื่อมต่อ Backend ให้เปิดใช้งานบรรทัดด้านล่างนี้
    // const response = await axios.get('/api/vehicles', { params });
    // return response.data.vehicles;

    // จำลองการหน่วงเวลาโหลดข้อมูลชั่วคราว
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_VEHICLES;
  } catch (error) {
    console.error('Failed to fetch vehicles:', error);
    throw error;
  }
};
