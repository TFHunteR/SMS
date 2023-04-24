<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Student extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'std_Name',
        'std_Gender',
        'std_Email',
        'std_Password',
        'std_Photo',
        'std_date_of_birth',
        'std_parents_guardian',
        'std_cp_number',
        'tchr_Id',
        'class_Id',
        'school_Id'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['std_Password'];

}
